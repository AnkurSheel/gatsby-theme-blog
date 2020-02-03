const padLeft0 = n => n.toString().padStart(2, '0');
const formatDate = d => `${d.getFullYear()}-${padLeft0(d.getMonth() + 1)}-${padLeft0(d.getDate())}`;
const todaysDate = formatDate(new Date());

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
