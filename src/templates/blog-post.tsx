import { SEO } from '@codinators/gatsby-shared-library';
import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import Donate from '../02-components/Donate';
import Main from '../02-components/Main';
import Article from '../03-composites/Article';
import Hero from '../03-composites/Hero';
import RelatedPosts from '../03-composites/RelatedPosts';
import Layout from '../04-layouts/layout';
import { BlogPostByIdQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-config';

interface BlogPostTemplateProps {
    data: Pick<BlogPostByIdQuery, 'post'>;
}
const BlogPostTemplate = ({ data: { post } }: BlogPostTemplateProps) => {
    const siteMetaData = useSiteMetadata();

    if (!siteMetaData || !post) {
        return <></>;
    }
    const { siteUrl } = siteMetaData;
    const twitterUserName = siteMetaData.twitterUsername || '';

    const { title, excerpt, draft, body, imageFacebook, imageTwitter, tags, date, path } = post;
    const fluid = (post.featuredImage?.sharp?.fluid || undefined) as IFluidObject | undefined;
    const featuredImagePosition = post.featuredImagePosition || '';
    const pathSplit = path.split('/');
    const slug = pathSplit[pathSplit.length - 1];
    return (
        <Layout>
            <SEO
                title={title}
                description={excerpt}
                imageFacebook={`${siteUrl}${imageFacebook.publicURL}`}
                imageTwitter={`${siteUrl}${imageTwitter.publicURL}`}
                url={`${siteUrl}${path}`}
                twitterUsername={twitterUserName}
                isBlog
            />

            <Hero image={fluid} title={title} imageStyles={{ backgroundPosition: featuredImagePosition }} />

            <Main>
                {draft && <h1>Draft Post</h1>}

                <Article body={body} tags={tags} date={date} path={slug} />
                <Donate />
            </Main>

            <Main>
                <RelatedPosts tags={tags} date={date} slug={path} />
            </Main>
        </Layout>
    );
};

export default BlogPostTemplate;

export const postQuery = graphql`
    query BlogPostById($id: String) {
        post(id: { eq: $id }) {
            id
            path
            title
            tags
            excerpt
            draft
            date(formatString: "DD MMMM, YYYY")
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
            imageTwitter {
                publicURL
            }
            imageFacebook {
                publicURL
            }
        }
    }
`;
