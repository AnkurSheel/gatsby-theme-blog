const slugify = require('@sindresorhus/slugify');
const { todaysDate } = require('./utils/helpers');

const buildPages = async (graphql, isDevelop, reporter, createPage) => {
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
            component: require.resolve('../src/templates/page.tsx'),
            context: { id: page.id },
        });
    });
};

const getPosts = async (graphql, isDevelop, reporter) => {
    const postsResult = await graphql(`
        query {
            allPost ${
                isDevelop
                    ? ''
                    : `filter: {draft: {eq: false}, date: {lte: "${todaysDate}"}}, sort: {order: DESC, fields: date}`
            }
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
    return posts;
};

const buildPosts = async (graphql, isDevelop, reporter, createPage) => {
    const posts = await getPosts(graphql, isDevelop, reporter);
    posts.forEach(post => {
        createPage({
            path: post.path,
            component: require.resolve(`../src/templates/blog-post.tsx`),
            context: { id: post.id },
        });
    });
};

const buildTags = async (graphql, isDevelop, reporter, createPage) => {
    const posts = await getPosts(graphql, isDevelop, reporter);

    posts
        .reduce((acc, cur) => [...new Set([...acc, ...cur.tags])], [])
        .forEach(uniqTag => {
            const tag = slugify(uniqTag);
            createPage({
                path: `tags/${tag}`,
                component: require.resolve('../src/templates/tags.tsx'),
                context: {
                    tagRegex: `/^${uniqTag}$/i`,
                    tag: uniqTag,
                },
            });
        });
};

// generate post share images (dev only)
const buildShareImages = async (graphql, isDevelop, reporter, createPage) => {
    if (isDevelop) {
        const posts = await getPosts(graphql, isDevelop, reporter);

        const BlogPostShareImage = require.resolve('../src/templates/blog-post-share-image.tsx');
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

exports.buildPages = buildPages;
exports.buildPosts = buildPosts;
exports.buildTags = buildTags;
exports.buildShareImages = buildShareImages;
