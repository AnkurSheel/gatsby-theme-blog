import { graphql, useStaticQuery } from 'gatsby';
import { SiteImagesQuery } from '../graphqlTypes';

const useSiteImages = (imageName: string) => {
    const result: SiteImagesQuery = useStaticQuery(graphql`
        query SiteImages {
            allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { ne: "social" } }) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);
    const items = result.allFile.edges;
    const image = items.find((edge) => edge.node.relativePath === imageName);
    if (image === undefined) {
        throw new Error(`Unable to find image: ${imageName} (in content/images)`);
    }

    return image.node.childImageSharp;
};

export default useSiteImages;
