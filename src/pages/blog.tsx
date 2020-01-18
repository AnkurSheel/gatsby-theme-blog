import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SEO } from '@codinators/gatsby-shared-library';
import Wrapper from '../01-elements/Wrapper';
import Hero from '../03-composites/Hero';
import PostsList from '../03-composites/PostsList';
import Layout from '../04-layouts/layout';
import useSiteMetadata from '../hooks/use-site-config';
import { BlogListQuery } from '../graphqlTypes';

const Articles = () => {
    const siteMetaData = useSiteMetadata();
    const data: BlogListQuery = useStaticQuery(graphql`
        query BlogList {
            posts: allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fileAbsolutePath: { regex: "//content/posts//" }, frontmatter: { published: { eq: true } } }
            ) {
                edges {
                    node {
                        excerpt
                        frontmatter {
                            date(formatString: "DD MMMM, YYYY")
                            title
                            tags
                            slug
                        }
                    }
                }
            }
        }
    `);
    const todaysDate = new Date();

    const posts = data.posts.edges.filter(p => {
        const date: string = p.node.frontmatter?.date || todaysDate.toDateString();
        return new Date(date) <= todaysDate;
    });

    const title = `All Articles`;
    const siteUrl = siteMetaData?.siteUrl || '';
    const path = 'blog';

    return (
        <Layout>
            <SEO title={title} description={title} url={`${siteUrl}/${path}`} isBlog={false} />
            <Hero title={title} />
            <main css={Wrapper}>
                <PostsList posts={posts} />
            </main>
        </Layout>
    );
};

export default Articles;
