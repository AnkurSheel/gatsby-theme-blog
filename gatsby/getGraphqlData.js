const slugify = require('@sindresorhus/slugify');
const { todaysDate } = require('./utils/helpers');

const getPages = async (graphql, isDevelop, reporter) => {
    const pagesFilter = isDevelop ? `` : `(filter: { draft: { eq: false }})`;

    const pagesResult = await graphql(`
        query Pages {
            allPage ${isDevelop ? '' : pagesFilter} {
                nodes {
                    id
                    path
                    title
                }
            }
        }
    `);

    if (pagesResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for pages');
    }

    return pagesResult.data.allPage.nodes;
};

const getPosts = async (graphql, isDevelop, reporter) => {
    const postsFilter = isDevelop
        ? `(
            sort: { fields: date, order: DESC }
        )`
        : `(
            filter: { draft: { eq: false }, date: { lte: "${todaysDate}" } }
            sort: { fields: date, order: DESC }
        )`;

    const postsResult = await graphql(`
        query BlogPost {
            allPost${postsFilter} {
                nodes {
                    id
                    path
                    title
                    tags
                    excerpt
                    draft
                    date(formatString: "DD MMMM, YYYY")
                    body
                    canonicalUrl
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

const getTags = async (posts) => {
    return posts
        .reduce((acc, cur) => [...new Set([...acc, ...cur.tags])], [])
        .map((uniqueTag) => {
            const tag = slugify(uniqueTag);
            return { path: `tags/${tag}`, uniqueTag };
        });
};

exports.getPages = getPages;
exports.getPosts = getPosts;
exports.getTags = getTags;
