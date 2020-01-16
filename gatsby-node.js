const { createFilePath } = require('gatsby-source-filesystem');
const slugify = require('@sindresorhus/slugify');

const padLeft0 = n => n.toString().padStart(2, '0');
const formatDate = d => `${d.getFullYear()}-${padLeft0(d.getMonth() + 1)}-${padLeft0(d.getDate())}`;
const date = formatDate(new Date());

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const BlogPostTemplate = require.resolve('./src/templates/blog-post.tsx');
    const BlogPostShareImage = require.resolve('./src/templates/blog-post-share-image.tsx');
    const PageTemplate = require.resolve('./src/templates/page.tsx');
    const PostsByTagTemplate = require.resolve('./src/templates/tags.tsx');

    const isDevelop = process.env.gatsby_executing_command.includes('develop');

    const allPostsQuery = await graphql(`
        {
            allMarkdown: allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
                ${
                    isDevelop
                        ? 'filter:{fileAbsolutePath: {regex: "/content/posts/"}}'
                        : `filter: { frontmatter: { published: { eq: true }, date: { lte: "${date}" } }, fileAbsolutePath: {regex: "/content/posts/"} }`
                }
            ) {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            title
                            slug
                            tags
                        }
                    }
                }
            }
        }
    `);

    if (allPostsQuery.errors) {
        reporter.panic(allPostsQuery.errors);
    }

    const allPagesQuery = await graphql(`
        {
            allMarkdown: allMdx
                ${
                    isDevelop
                        ? '(filter: { fileAbsolutePath: {regex: "/content/pages/"} })'
                        : '(filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/pages/"} })'
                }
            {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            title
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (allPagesQuery.errors) {
        reporter.panic(allPagesQuery.errors);
    }

    const posts = allPostsQuery.data.allMarkdown.edges;

    // generate blog posts
    posts.forEach(post => {
        createPage({
            path: `/blog/${post.node.frontmatter.slug}`,
            component: BlogPostTemplate,
            context: {
                slug: post.node.frontmatter.slug,
            },
        });

        // generate post share images (dev only)
        if (isDevelop) {
            createPage({
                path: `/blog/${post.node.frontmatter.slug}/image_tw`,
                component: BlogPostShareImage,
                context: {
                    slug: post.node.frontmatter.slug,
                    width: 440,
                    height: 220,
                    type: 'twitter',
                },
            });
            createPage({
                path: `blog/${post.node.frontmatter.slug}/image_fb`,
                component: BlogPostShareImage,
                context: {
                    slug: post.node.frontmatter.slug,
                    width: 1200,
                    height: 630,
                    type: 'facebook',
                },
            });
        }
    });

    // generate pages
    allPagesQuery.data.allMarkdown.edges.forEach(page => {
        createPage({
            path: page.node.frontmatter.slug,
            component: PageTemplate,
            context: {
                slug: page.node.frontmatter.slug,
            },
        });
    });

    // generate tags
    posts
        .filter(item => item.node.frontmatter.tags !== null)
        .reduce((acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags.map(t => t.toLowerCase())])], [])
        .forEach(uniqTag => {
            const tag = slugify(uniqTag);
            createPage({
                path: `tags/${tag}`,
                component: PostsByTagTemplate,
                context: {
                    tagRegex: `/^${uniqTag.toLowerCase()}$/i`,
                    tag,
                },
            });
        });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
