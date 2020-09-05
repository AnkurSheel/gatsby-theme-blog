import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import Donate from '../02-components/Donate';
import Main from '../02-components/Main';
import SEO from '../02-components/Seo';
import Article from '../03-composites/Article';
import Content from '../03-composites/Content';
import Hero from '../03-composites/Hero';
import RelatedPosts from '../03-composites/RelatedPosts';
import Layout from '../04-layouts/default-layout';
import { BlogPostByIdQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-meta-data';

interface BlogPostTemplateProps {
    data: Pick<BlogPostByIdQuery, 'post'>;
}
const BlogPostTemplate = ({ data: { post } }: BlogPostTemplateProps) => {
    const siteMetaData = useSiteMetadata();

    if (!siteMetaData || !post) {
        return <></>;
    }
    const { siteUrl } = siteMetaData;

    const { title, excerpt, draft, body, imageFacebook, imageTwitter, tags, date, path } = post;
    const fluid = (post.featuredImage?.sharp?.fluid || undefined) as IFluidObject | undefined;
    const featuredImagePosition = post.featuredImagePosition || '';
    return (
        <Layout>
            <SEO
                title={title}
                description={excerpt}
                imageFacebook={imageFacebook && `${siteUrl}${imageFacebook.publicURL}`}
                imageTwitter={imageTwitter && `${siteUrl}${imageTwitter.publicURL}`}
                url={`${siteUrl}${path}`}
                isBlog
            />

            <Hero image={fluid} title={title} imageStyles={{ backgroundPosition: featuredImagePosition }} />

            <Main>
                {draft && <h1>Draft Post</h1>}

                <article>
                    <Content content={body} date={date} tags={tags} path={path} />
                    <aside>
                        <Donate />
                    </aside>
                </article>
            </Main>

            <Article>
                <RelatedPosts tags={tags} date={date} slug={path} />
            </Article>
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
                    fluid(maxWidth: 800) {
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
