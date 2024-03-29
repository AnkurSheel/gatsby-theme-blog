const withDefaults = require('./gatsby/utils/defaultThemeOptions');
const { createDir } = require('./gatsby/createDir');
const { createPageType, createPostType } = require('./gatsby/createTypes');
const { createPageNode, createPostNode } = require('./gatsby/createNodes');
const { createBodyResolver, createTimeToReadResolver, createHtmlResolver } = require('./gatsby/createResolvers');
const { getPosts } = require('./gatsby/getGraphqlData');
const {
    buildPages,
    buildBlogListPage,
    buildPosts,
    buildTags,
    buildShareImages,
    buildRandomPostPage,
} = require('./gatsby/createPages');
const { writeLinksToFile } = require('./gatsby/writeLinksToFile');

exports.onPreBootstrap = ({ store }, options) => {
    const { program } = store.getState();
    const { contentDir } = withDefaults(options);
    createDir(program, contentDir.pages);
    createDir(program, contentDir.posts);
    createDir(program, contentDir.images);
};

exports.createSchemaCustomization = ({ actions }) => {
    createPageType(actions);
    createPostType(actions);
};

exports.onCreateNode = async ({ node, actions: { createNode }, getNode, createNodeId }, options) => {
    const { basePath, postsBasePath, contentDir } = withDefaults(options);
    const parent = getNode(node.parent);

    if (node.internal.type !== 'Mdx') {
        return;
    }

    if (parent.sourceInstanceName === 'pages') {
        createPageNode(parent, createNode, createNodeId, node, basePath);
    }

    if (parent.sourceInstanceName === 'posts') {
        createPostNode(parent, createNode, createNodeId, node, postsBasePath, contentDir.images);
    }
};

exports.createResolvers = ({ createResolvers }) => {
    createResolvers({
        Page: {
            body: {
                type: 'String!',
                resolve: createBodyResolver(),
            },
        },
        Post: {
            body: {
                type: 'String!',
                resolve: createBodyResolver(),
            },
            timeToRead: {
                type: 'Int!',
                resolve: createTimeToReadResolver(),
            },
            html: {
                type: 'String!',
                resolve: createHtmlResolver(),
            },
        },
    });
};

exports.createPages = async ({ graphql, actions, reporter }, options) => {
    const { createPage } = actions;
    const { allPostsPath } = withDefaults(options);
    const isDevelop = process.env.gatsby_executing_command.includes('develop');

    await buildPages(graphql, isDevelop, reporter, createPage);

    const allPosts = await getPosts(graphql, isDevelop, reporter);

    await Promise.all([
        buildBlogListPage(allPosts, allPostsPath, createPage),
        buildPosts(allPosts.allPost.nodes, createPage),
        buildTags(allPosts.allPost.nodes, createPage),
        buildShareImages(allPosts.allPost.nodes, isDevelop, createPage),
        buildRandomPostPage(allPosts, createPage),
    ]);
};

exports.onPostBuild = async ({ graphql, reporter }, options) => {
    await writeLinksToFile(options, reporter, graphql);
};
