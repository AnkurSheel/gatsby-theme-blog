const pluginOptions = require('./gatsby/plugins');
const withDefaults = require('./gatsby/utils/defaultThemeOptions');

module.exports = (options) => {
    const { contentDir, useExternalMDX } = withDefaults(options);

    return {
        plugins: [
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
            !useExternalMDX && {
                resolve: `gatsby-plugin-mdx`,
                options: pluginOptions.mdx,
            },
            `gatsby-plugin-typescript`,
            {
                resolve: `gatsby-transformer-json`,
                options: pluginOptions.transformerjson,
            },
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: 'posts',
                    path: contentDir.posts,
                },
            },
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: 'pages',
                    path: contentDir.pages,
                },
            },
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: 'images',
                    path: contentDir.images,
                },
            },
            `gatsby-plugin-emotion`,
            `gatsby-plugin-react-helmet`,
            { resolve: `gatsby-plugin-catch-links` },
            {
                resolve: `gatsby-plugin-feed`,
                options: pluginOptions.rssFeed(options),
            },
            { resolve: `gatsby-plugin-sitemap` },
            {
                resolve: 'gatsby-plugin-robots-txt',
                options: pluginOptions.robotsTxt,
            },
            {
                resolve: `gatsby-plugin-page-creator`,
                options: {
                    path: `${__dirname}/src/pages`,
                },
            },
            {
                resolve: `gatsby-plugin-twitter`,
            },
        ].filter(Boolean),
    };
};
