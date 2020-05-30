import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetaDataQuery } from '../graphqlTypes';

const useSiteMetadata = () => {
    const result: SiteMetaDataQuery = useStaticQuery(graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    siteTitle
                    siteUrl
                    authorName
                    siteDescription
                    twitterUsername
                    donateText
                    buyMeACoffee {
                        altText
                        link
                    }
                    headerTitle
                    headerLinksIcon
                    headerLinks {
                        label
                        url
                    }
                    socialLinks {
                        twitter {
                            url
                            text
                        }
                        github {
                            url
                            text
                        }
                        linkedin {
                            url
                            text
                        }
                        rss {
                            url
                            text
                        }
                    }
                    footerLinks {
                        sectionName
                        links {
                            label
                            url
                        }
                    }
                }
            }
        }
    `);
    return result.site && result.site.siteMetadata;
};

export default useSiteMetadata;
