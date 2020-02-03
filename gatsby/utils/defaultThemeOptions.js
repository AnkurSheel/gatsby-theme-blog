module.exports = ({
    basePath = '/',
    contentDir = { pages: 'content/pages', posts: 'content/posts' },
    postsBasePath = '/blog',
    useExternalMDX = false,
    rss = { file: 'rss.xml', title: 'RSS' },
}) => ({
    basePath,
    contentDir,
    postsBasePath,
    useExternalMDX,
    rss,
});
