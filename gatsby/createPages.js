const { todaysDate } = require('./utils/helpers');
const { getPosts, getPages, getTags } = require('./getGraphqlData');

const buildPages = async (graphql, isDevelop, reporter, createPage) => {
    const pages = await getPages(graphql, isDevelop, reporter);

    pages.forEach((page) => {
        createPage({
            path: page.path,
            component: require.resolve('../src/templates/page.tsx'),
            context: { id: page.id },
        });
    });
};

const buildBlogListPage = async (allPosts, path, createPage) => {
    createPage({
        path,
        component: require.resolve(`../src/templates/blog-list.tsx`),
        context: { allPosts },
    });
};

const buildPosts = async (posts, createPage) => {
    posts.forEach((post) => {
        createPage({
            path: post.path,
            component: require.resolve(`../src/templates/blog-post.tsx`),
            context: { id: post.id },
        });
    });
};

const buildTags = async (posts, createPage) => {
    const tags = await getTags(posts);

    tags.forEach((tag) => {
        createPage({
            path: tag.path,
            component: require.resolve('../src/templates/tags.tsx'),
            context: {
                tagRegex: `/^${tag.uniqueTag}$/i`,
                date: todaysDate,
                tag: tag.uniqueTag,
            },
        });
    });
};

// generate post share images (dev only)
const buildShareImages = async (posts, isDevelop, createPage) => {
    if (isDevelop) {
        const BlogPostShareImage = require.resolve('../src/templates/blog-post-share-image.tsx');
        posts.forEach((post) => {
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

const buildRandomPostPage = async (allPosts, createPage) => {
    createPage({
        path: '/random-post/',
        component: require.resolve(`../src/templates/random-post.tsx`),
        context: { allPosts },
    });
};

exports.buildPages = buildPages;
exports.buildBlogListPage = buildBlogListPage;
exports.buildPosts = buildPosts;
exports.buildTags = buildTags;
exports.buildShareImages = buildShareImages;
exports.buildRandomPostPage = buildRandomPostPage;
