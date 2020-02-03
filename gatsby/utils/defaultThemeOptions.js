module.exports = ({
    basePath = '/',
    pagesDir = 'content/pages',
    postsDir = 'content/posts',
    postsBasePath = '/blog',
    useExternalMDX = false,
    rss = { file: 'rss.xml', title: 'RSS' },
}) => ({
    basePath,
    pagesDir,
    postsDir,
    postsBasePath,
    useExternalMDX,
    rss,
});
