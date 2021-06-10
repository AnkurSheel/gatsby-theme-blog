const { join } = require(`path`);
const { urlResolve } = require(`gatsby-core-utils`);
const { getPostDetailsFromDir } = require('./utils/helpers');

const createPageNode = (parent, createNode, createNodeId, node, basePath) => {
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
};

const createPostNode = (parent, createNode, createNodeId, node, blogBasePath, imageDir) => {
    const postDetails = getPostDetailsFromDir(blogBasePath, parent.relativeDirectory);
    const imagePath = join(process.cwd(), imageDir, 'social', `${postDetails.path}-image-`);

    createNode({
        id: createNodeId(`Post-${node.id}`),
        title: node.frontmatter.title || parent.name,
        path: postDetails.slug,
        date: postDetails.date,
        tags: node.frontmatter.tags,
        excerpt: node.frontmatter.excerpt,
        draft: node.frontmatter.draft || false,
        canonicalUrl: node.frontmatter.canonicalUrl || null,
        featuredImage: node.frontmatter.featuredImage || null,
        imageFacebook: `${imagePath}facebook.png`,
        imageTwitter: `${imagePath}twitter.png`,
        featuredImagePosition: node.frontmatter.featuredImagePosition || '',
        parent: node.id,
        internal: {
            type: 'Post',
            contentDigest: node.internal.contentDigest,
        },
    });
};

exports.createPageNode = createPageNode;
exports.createPostNode = createPostNode;
