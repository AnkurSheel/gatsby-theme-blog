module.exports = ({
    basePath = '/',
    pagesDir = 'content/pages',
    postsDir = 'content/posts',
    postsBasePath = '/blog',
    useExternalMDX = false,
}) => ({
    basePath,
    pagesDir,
    postsDir,
    postsBasePath,
    useExternalMDX,
});
