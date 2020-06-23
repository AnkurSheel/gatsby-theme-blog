import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import Main from '../02-components/Main';
import SEO from '../02-components/Seo';
import Content from '../03-composites/Content';
import Hero from '../03-composites/Hero';
import Layout from '../04-layouts/default-layout';
import { PageByIdQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-meta-data';

interface PageProps {
    data: Pick<PageByIdQuery, 'page'>;
}

export const Page = ({ data: { page } }: PageProps) => {
    const siteMetaData = useSiteMetadata();

    if (!siteMetaData || !page) {
        return <></>;
    }

    const { siteUrl } = siteMetaData;

    const { title, path } = page;
    const fluid = (page.featuredImage?.sharp?.fluid || undefined) as IFluidObject | undefined;
    const featuredImagePosition = page.featuredImagePosition || '';
    return (
        <Layout>
            <SEO title={title} description={title} url={`${siteUrl}${path}`} isBlog={false} />

            <Hero image={fluid} title={title} imageStyles={{ backgroundPosition: `${featuredImagePosition}` }} />

            <Main>
                <article>
                    <Content content={page?.body || ''} path={path} />
                </article>
            </Main>
        </Layout>
    );
};

export default Page;

export const pageQuery = graphql`
    query PageById($id: String!) {
        page(id: { eq: $id }) {
            id
            path
            title
            body
            featuredImage {
                publicURL
                sharp: childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            featuredImagePosition
        }
    }
`;
