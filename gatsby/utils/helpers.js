const { urlResolve } = require(`gatsby-core-utils`);

const getPostDetailsFromDir = (basePath, postName) => {
    const [, year, date, path] = postName.match(/^([\d]{4})\/([\d]{4}-[\d]{2}-[\d]{2})-(.+)$/);
    const slug = urlResolve(basePath, path);
    return { year, date, path, slug };
};

const padLeft0 = (n) => n.toString().padStart(2, '0');
const formatDate = (d) => `${d.getFullYear()}-${padLeft0(d.getMonth() + 1)}-${padLeft0(d.getDate())}`;
const todaysDate = formatDate(new Date());

exports.getPostDetailsFromDir = getPostDetailsFromDir;
exports.todaysDate = todaysDate;
