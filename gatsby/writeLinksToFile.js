const fs = require('fs');
const withDefaults = require('./utils/defaultThemeOptions');
const { getTags } = require('./getGraphqlData');

async function writeLinksToFile(options, reporter, graphql) {
    const { linksOutputPath } = withDefaults(options);
    reporter.verbose(`Writing all pages to ${linksOutputPath}`);

    const result = await graphql(`
        query AllPages {
            allPost(sort: { fields: date, order: DESC }) {
                nodes {
                    title
                    tags
                    excerpt
                    path
                }
            }
            allPage {
                nodes {
                    title
                    path
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for posts');
    }

    const allTags = await getTags(result.data.allPost.nodes);

    const postData = result.data.allPost.nodes
        .map((a) => {
            return { title: a.title, excerpt: a.excerpt, path: a.path };
        })
        .sort((a, b) => (a.title < b.title ? -1 : 1));

    const pageData = result.data.allPage.nodes
        .map((a) => {
            return { title: a.title, excerpt: null, path: a.path };
        })
        .sort((a, b) => (a.title < b.title ? -1 : 1));

    const tagData = allTags
        .map((a) => {
            return { title: `Posts tagged as ${a.uniqueTag}`, excerpt: null, path: `/${a.path}` };
        })
        .sort((a, b) => (a.title < b.title ? -1 : 1));

    const data = pageData.concat(postData).concat(tagData);

    await fs.writeFile(linksOutputPath, JSON.stringify(data, null, '\t'), (err) => {
        if (err) throw err;
    });
    reporter.verbose(`Finished Writing ${data.length} links to ${linksOutputPath}`);
}
exports.writeLinksToFile = writeLinksToFile;
