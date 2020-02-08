const withDefaults = require('./gatsby/utils/defaultThemeOptions');
const { createDir } = require('./gatsby/createDir');
const { createPageType, createPostType } = require('./gatsby/createTypes');
const { createPageNode, createPostNode } = require('./gatsby/createNodes');
const { createBodyResolver, createTimeToReadResolver, createHtmlResolver } = require('./gatsby/createResolvers');
const { buildPages, buildPosts, buildTags, buildShareImages, buildRandomPostPage } = require('./gatsby/createPages');

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
    const { basePath, postsBasePath } = withDefaults(options);
    const parent = getNode(node.parent);

    if (node.internal.type !== 'Mdx') {
        return;
    }

    if (parent.sourceInstanceName === 'pages') {
        createPageNode(parent, createNode, createNodeId, node, basePath);
    }

    if (parent.sourceInstanceName === 'posts') {
        createPostNode(parent, createNode, createNodeId, node, postsBasePath);
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

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const isDevelop = process.env.gatsby_executing_command.includes('develop');

    await buildPages(graphql, isDevelop, reporter, createPage);

    await buildPosts(graphql, isDevelop, reporter, createPage);

    await buildTags(graphql, isDevelop, reporter, createPage);

    await buildShareImages(graphql, isDevelop, reporter, createPage);

    await buildRandomPostPage(graphql, isDevelop, reporter, createPage);
};
