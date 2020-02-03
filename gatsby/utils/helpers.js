const { urlResolve } = require(`gatsby-core-utils`);

const getPostDetailsFromDir = (basePath, postName) => {
    const [, year, date, title] = postName.match(/^([\d]{4})\/([\d]{4}-[\d]{2}-[\d]{2})-(.+)$/);
    const slug = urlResolve(basePath, title);
    return { year, date, slug };
};

exports.getPostDetailsFromDir = getPostDetailsFromDir;
