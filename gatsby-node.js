const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const slugify = require('@sindresorhus/slugify');
const withDefaults = require('./utils/defaultThemeOptions');

const { urlResolve } = require(`gatsby-core-utils`);

let blogBasePath = '';
const getPostDetailsFromDir = (basePath, postName) => {
    const [, year, date, title] = postName.match(/^([\d]{4})\/([\d]{4}-[\d]{2}-[\d]{2})-(.+)$/);
    const slug = urlResolve(basePath, title);
    return { year, date, slug };
};

exports.onPreBootstrap = ({ store }, options) => {
    const { program } = store.getState();
    const { pagesDir, postsDir, postsBasePath } = withDefaults(options);
    blogBasePath = postsBasePath;
    const pagesPath = path.join(program.directory, pagesDir);
    if (!fs.existsSync(pagesPath)) {
        mkdirp.sync(pagesPath);
    }
    const postsPath = path.join(program.directory, postsDir);
    if (!fs.existsSync(postsPath)) {
        mkdirp.sync(postsPath);
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
    type Page implements Node @dontInfer{
      id: ID!
      title: String!
      draft: Boolean
      path: String!
      body: String!
      featuredImage: File @fileByRelativePath
      featuredImagePosition: String
    }`);

    actions.createTypes(`
    type Post implements Node @dontInfer {
        id: ID!
        title: String!
        path: String!
        excerpt: String!
        date: Date! @dateformat(formatString: "YYYY-MM-DD")
        body:String!
        tags: [String!]!
        timeToRead: Int!
        draft: Boolean
        featuredImage: File @fileByRelativePath
        featuredImagePosition: String
        imageFacebook: File! @fileByRelativePath
        imageTwitter: File! @fileByRelativePath
    }`);
};

exports.onCreateNode = async ({ node, actions: { createNode }, getNode, createNodeId }, options) => {
    const { basePath } = withDefaults(options);
    const parent = getNode(node.parent);

    if (node.internal.type !== 'Mdx') {
        return;
    }

    if (parent.sourceInstanceName === 'pages') {
        const pageName = parent.name !== 'index' ? parent.name : '';

        createNode({
            id: createNodeId(`Page-${node.id}`),
            title: node.frontmatter.title || parent.name,
            path: urlResolve(basePath, parent.relativeDirectory, pageName),
            draft: node.frontmatter.draft || false,
            featuredImage: node.frontmatter.featuredImage || null,
            featuredImagePosition: node.frontmatter.featuredImagePosition || '',
            parent: node.id,
            internal: {
                type: 'Page',
                contentDigest: node.internal.contentDigest,
            },
        });
    }

    if (parent.sourceInstanceName === 'posts') {
        const postDetails = getPostDetailsFromDir(blogBasePath, parent.relativeDirectory);

        createNode({
            id: createNodeId(`Post-${node.id}`),
            title: node.frontmatter.title || parent.name,
            path: postDetails.slug,
            excerpt: node.frontmatter.excerpt,
            date: postDetails.date,
            tags: node.frontmatter.tags,
            draft: node.frontmatter.draft || false,
            featuredImage: node.frontmatter.featuredImage || null,
            imageFacebook: './image-facebook.png',
            imageTwitter: './image-twitter.png',
            featuredImagePosition: node.frontmatter.featuredImagePosition || '',
            parent: node.id,
            internal: {
                type: 'Post',
                contentDigest: node.internal.contentDigest,
            },
        });
    }
};

exports.createResolvers = ({ createResolvers }) => {
    createResolvers({
        Page: {
            body: {
                type: 'String!',
                resolve: (source, args, context, info) => {
                    const type = info.schema.getType('Mdx');
                    const mdxFields = type.getFields();
                    const resolver = mdxFields.body.resolve;

                    const mdxNode = context.nodeModel.getNodeById({ id: source.parent });
                    return resolver(mdxNode, args, context, {
                        fieldName: 'body',
                    });
                },
            },
        },
        Post: {
            body: {
                type: 'String!',
                resolve: (source, args, context, info) => {
                    const type = info.schema.getType('Mdx');
                    const mdxFields = type.getFields();
                    const resolver = mdxFields.body.resolve;

                    const mdxNode = context.nodeModel.getNodeById({ id: source.parent });
                    return resolver(mdxNode, args, context, {
                        fieldName: 'body',
                    });
                },
            },
            timeToRead: {
                type: 'Int!',
                resolve: (source, args, context, info) => {
                    const type = info.schema.getType('Mdx');
                    const mdxFields = type.getFields();
                    const resolver = mdxFields.timeToRead.resolve;

                    const mdxNode = context.nodeModel.getNodeById({ id: source.parent });
                    return resolver(mdxNode, args, context, {
                        fieldName: 'timeToRead',
                    });
                },
            },
        },
    });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const isDevelop = process.env.gatsby_executing_command.includes('develop');

    const pagesResult = await graphql(`
        query {
            allPage ${isDevelop ? '' : '(filter: { draft: { eq: false } })'}
            {
                nodes {
                    id
                    path
                }
            }
        }
    `);
    if (pagesResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for pages');
    }

    const pages = pagesResult.data.allPage.nodes;
    pages.forEach(page => {
        createPage({
            path: page.path,
            component: require.resolve('./src/templates/page.tsx'),
            context: { id: page.id },
        });
    });

    const postsResult = await graphql(`
        query {
            allPost ${isDevelop ? '' : '(filter: { draft: { eq: false } })'}
            {
                nodes {
                    id
                    path
                    tags
                }
            }
        }
    `);

    if (postsResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for posts');
    }

    const posts = postsResult.data.allPost.nodes;

    posts.forEach(post => {
        createPage({
            path: post.path,
            component: require.resolve(`./src/templates/blog-post.tsx`),
            context: { id: post.id },
        });
    });

    posts
        .reduce((acc, cur) => [...new Set([...acc, ...cur.tags])], [])
        .forEach(uniqTag => {
            const tag = slugify(uniqTag);
            createPage({
                path: `tags/${tag}`,
                component: require.resolve('./src/templates/tags.tsx'),
                context: {
                    tagRegex: `/^${uniqTag}$/i`,
                    tag: uniqTag,
                },
            });
        });

    // generate post share images (dev only)
    if (isDevelop) {
        const BlogPostShareImage = require.resolve('./src/templates/blog-post-share-image.tsx');
        posts.forEach(post => {
            createPage({
                path: `${post.path}/image_tw`,
                component: BlogPostShareImage,
                context: {
                    id: post.id,
                    width: 440,
                    height: 220,
                    type: 'twitter',
                },
            });
            createPage({
                path: `${post.path}/image_fb`,
                component: BlogPostShareImage,
                context: {
                    id: post.id,
                    width: 1200,
                    height: 630,
                    type: 'facebook',
                },
            });
        });
    }
};
