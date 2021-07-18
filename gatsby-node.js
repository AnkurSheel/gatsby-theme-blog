const path = require('path');
const fs = require('fs');
const withDefaults = require('./gatsby/utils/defaultThemeOptions');
const { createDir } = require('./gatsby/createDir');
const { createPageType, createPostType } = require('./gatsby/createTypes');
const { createPageNode, createPostNode } = require('./gatsby/createNodes');
const { createBodyResolver, createTimeToReadResolver, createHtmlResolver } = require('./gatsby/createResolvers');
const { getPosts, getPages, getTags } = require('./gatsby/getGraphqlData');
const {
    buildPages,
    buildBlogListPage,
    buildPosts,
    buildTags,
    buildShareImages,
    buildRandomPostPage,
} = require('./gatsby/createPages');

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
    const { linksOutputPath } = withDefaults(options);
    reporter.verbose(`Writing all pages to ${linksOutputPath}`);

    const allPosts = await getPosts(graphql, true, reporter);
    const allPages = await getPages(graphql, true, reporter);
    const allTags = await getTags(allPosts.allPost.nodes);

    const postData = allPosts.allPost.nodes.map((a) => {
        return { title: a.title, excerpt: a.excerpt, path: a.path };
    });
    const pageData = allPages.map((a) => {
        return { title: a.title, excerpt: null, path: a.path };
    });

    const tagData = allTags.map((a) => {
        return { title: `Tag ${a.uniqueTag}`, excerpt: null, path: `/${a.path}` };
    });

    const data = pageData.concat(postData).concat(tagData);

    await fs.writeFile(linksOutputPath, JSON.stringify(data, null, '\t'), (err) => {
        if (err) throw err;
    });
    reporter.verbose(`Finished Writing ${data.length} links to ${linksOutputPath}`);
};
