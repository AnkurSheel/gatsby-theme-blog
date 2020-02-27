const slugify = require('@sindresorhus/slugify');
const { todaysDate } = require('./utils/helpers');

const buildPages = async (graphql, isDevelop, reporter, createPage) => {
    const pagesFilter = `(filter: { draft: { eq: false }})`;

    const pagesResult = await graphql(`
        query Pages {
            allPage ${isDevelop ? '' : pagesFilter} {
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

const postsFilter = `(
                filter: { draft: { eq: false }, date: { lte: "${todaysDate}" } }
                sort: { fields: date, order: DESC }
            )`;

const getPosts = async (graphql, isDevelop, reporter) => {
    const postsResult = await graphql(`
        query BlogPost {
            allPost${isDevelop ? '' : postsFilter} {
                nodes {
                    id
                    path
                    title
                    tags
                    excerpt
                    draft
                    date(formatString: "DD MMMM, YYYY")
                    body
                    featuredImage {
                        publicURL
                        sharp: childImageSharp {
                            fluid(maxWidth: 800) {
                                aspectRatio
                                src
                                srcSet
                                sizes
                                originalName
                            }
                        }
                    }
                    featuredImagePosition
                    imageTwitter {
                        publicURL
                    }
                    imageFacebook {
                        publicURL
                    }
                }
            }
        }
    `);

    if (postsResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for posts');
    }
    const allPosts = postsResult.data;
    return allPosts;
};

const buildPosts = async (posts, createPage) => {
    posts.forEach(post => {
        createPage({
            path: post.path,
            component: require.resolve(`../src/templates/blog-post.tsx`),
            context: { id: post.id },
        });
    });
};

const buildTags = async (posts, createPage) => {
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
const buildShareImages = async (posts, isDevelop, createPage) => {
    if (isDevelop) {
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

const buildRandomPostPage = async (allPosts, createPage) => {
    createPage({
        path: '/random-post/',
        component: require.resolve(`../src/templates/random-post.tsx`),
        context: { allPosts },
    });
};

exports.getPosts = getPosts;
exports.buildPages = buildPages;
exports.buildPosts = buildPosts;
exports.buildTags = buildTags;
exports.buildShareImages = buildShareImages;
exports.buildRandomPostPage = buildRandomPostPage;
