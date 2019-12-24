const mdxOptions = require('./mdxOptions');
const transformerRemarkOptions = require('./transformerRemarkOptions');
const feedOptions = require('./feedOptions');
const robotsTxtOptions = require('./robotsTxtOptions');
const transformerjsonOptions = require('./transformerJsonOptions');

module.exports = {
    mdx: mdxOptions,
    transformerRemark: transformerRemarkOptions,
    rssFeed: feedOptions,
    robotsTxt: robotsTxtOptions,
    transformerjson: transformerjsonOptions,
};
