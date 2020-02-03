const { todaysDate } = require('../utils/helpers');

module.exports = options => {
    const { rss } = options;
    return {
        feeds: [
            {
                serialize: ({ query: { site, allPost } }) => {
                    const {
                        siteMetadata: { siteUrl },
                    } = site;

                    return allPost.nodes.map(post => {
                        const blogUrl = `${siteUrl}${post.path}`;

                        return {
                            title: post.title,
                            description: post.excerpt,
                            date: post.date,
                            url: blogUrl,
                            guid: blogUrl,
                            enclosure: post.featuredImage && {
                                url: siteUrl + post.featuredImage.publicURL,
                            },
                            custom_elements: [{ 'content:encoded': post.html }],
                        };
                    });
                },
                query: `
              {
                site {
                siteMetadata {
                  siteUrl
                }
              }

              allPost(filter: {draft: {eq: false}, date: {lte: "${todaysDate}"}}, sort: {order: DESC, fields: date}) {
                nodes {
                  excerpt
                  html
                  path
                  title
                  date
                  featuredImage {
                    publicURL
                  }
                }
              }
            }
            `,
                output: rss.file,
                title: rss.title,
            },
        ],
    };
};
