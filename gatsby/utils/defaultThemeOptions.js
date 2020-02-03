module.exports = ({
    basePath = '/',
    pagesDir = 'content/pages',
    postsDir = 'content/posts',
    postsBasePath = '/blog',
    useExternalMDX = false,
    rssFile = 'rss.xml',
    rssTitle = 'RSS',
}) => ({
    basePath,
    pagesDir,
    postsDir,
    postsBasePath,
    useExternalMDX,
    rssFile,
    rssTitle,
});
