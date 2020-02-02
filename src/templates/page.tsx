import React from 'react';
import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import { SEO } from '@codinators/gatsby-shared-library';
import { PageByIdQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-config';
import Layout from '../04-layouts/layout';
import Hero from '../03-composites/Hero';
import Main from '../02-components/Main';
import Content from '../03-composites/Content';

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
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            featuredImagePosition
        }
    }
`;
