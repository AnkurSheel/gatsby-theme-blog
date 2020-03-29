module.exports = {
    extensions: [`.mdx`, `.md`],
    defaultLayouts: {
        default: require.resolve('../../src/templates/page.tsx'),
    },
    gatsbyRemarkPlugins: [
        {
            resolve: 'gatsby-remark-images',
            options: {
                maxWidth: 800,
                linkImagesToOriginal: false,
                withWebp: true,
                markdownCaptions: true,
                showCaptions: ['title', 'alt'],
            },
        },
        { resolve: 'gatsby-remark-autolink-headers' },
        {
            resolve: 'gatsby-remark-prismjs',
            options: {
                showLineNumbers: true,
            },
        },
        { resolve: 'gatsby-remark-responsive-iframe' },
        {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
                destinationDir: f => `downloads/${f.name}`,
                ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
        },
        { resolve: 'gatsby-remark-smartypants' },
        { resolve: 'gatsby-remark-external-links' },
    ],
    plugins: [`gatsby-remark-images`],
};
