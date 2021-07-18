module.exports = ({
    basePath = '/',
    contentDir = { pages: 'content/pages', posts: 'content/posts', images: 'content/images' },
    postsBasePath = '/blog',
    allPostsPath = 'blog/',
    useExternalMDX = false,
    rss = { file: 'rss.xml', title: 'RSS' },
    linksOutputPath = './links.json',
}) => ({
    basePath,
    contentDir,
    postsBasePath,
    allPostsPath,
    useExternalMDX,
    rss,
    linksOutputPath,
});
