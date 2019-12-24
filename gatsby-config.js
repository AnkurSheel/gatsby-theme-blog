const pluginOptions = require('./config/gatsby/plugins');

module.exports = {
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: pluginOptions.mdx,
        },
        // Reminder (https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-509405867)
        {
            resolve: `gatsby-transformer-remark`,
            options: pluginOptions.transformerRemark,
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
                path: 'content/posts',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'pages',
                path: 'content/pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'images',
                path: 'content/images',
            },
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        { resolve: `gatsby-plugin-catch-links` },
        {
            resolve: `gatsby-plugin-feed`,
            options: pluginOptions.rssFeed,
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
    ],
};
