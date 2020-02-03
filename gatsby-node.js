const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const withDefaults = require('./gatsby/utils/defaultThemeOptions');
const { createPageType, createPostType } = require('./gatsby/createTypes');
const { createPageNode, createPostNode } = require('./gatsby/createNodes');
const { createBodyResolver, createTimeToReadResolver, createHtmlResolver } = require('./gatsby/createResolvers');
const { buildPages, buildPosts, buildTags, buildShareImages } = require('./gatsby/createPages');

let blogBasePath = '';

exports.onPreBootstrap = ({ store }, options) => {
    const { program } = store.getState();
    const { contentDir, postsBasePath } = withDefaults(options);
    blogBasePath = postsBasePath;
    const pagesPath = path.join(program.directory, contentDir.pages);
    if (!fs.existsSync(pagesPath)) {
        mkdirp.sync(pagesPath);
    }
    const postsPath = path.join(program.directory, contentDir.posts);
    if (!fs.existsSync(postsPath)) {
        mkdirp.sync(postsPath);
    }
    const imagesPath = path.join(program.directory, contentDir.images);
    if (!fs.existsSync(imagesPath)) {
        mkdirp.sync(imagesPath);
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    createPageType(actions);
    createPostType(actions);
};

exports.onCreateNode = async ({ node, actions: { createNode }, getNode, createNodeId }, options) => {
    const { basePath } = withDefaults(options);
    const parent = getNode(node.parent);

    if (node.internal.type !== 'Mdx') {
        return;
    }

    if (parent.sourceInstanceName === 'pages') {
        createPageNode(parent, createNode, createNodeId, node, basePath);
    }

    if (parent.sourceInstanceName === 'posts') {
        createPostNode(parent, createNode, createNodeId, node, blogBasePath);
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
};
