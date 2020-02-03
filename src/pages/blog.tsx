import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SEO } from '@codinators/gatsby-shared-library';
import Hero from '../03-composites/Hero';
import PostsList from '../03-composites/PostsList';
import Layout from '../04-layouts/layout';
import useSiteMetadata from '../hooks/use-site-config';
import { BlogListQuery } from '../graphqlTypes';
import Main from '../02-components/Main';

const Articles = () => {
    const siteMetaData = useSiteMetadata();
    const data: BlogListQuery = useStaticQuery(graphql`
        query BlogList {
            allPost(sort: { fields: date, order: DESC }, filter: { draft: { eq: false } }) {
                nodes {
                    excerpt
                    date(formatString: "DD MMMM, YYYY")
                    title
                    path
                    tags
                }
            }
        }
    `);
    const todaysDate = new Date();

    const posts = data.allPost.nodes.filter(p => {
        const { date } = p;
        return new Date(date) <= todaysDate;
    });

    const title = `All Articles`;
    const siteUrl = siteMetaData?.siteUrl || '';
    const path = 'blog/';
    return (
        <Layout>
            <SEO title={title} description={title} url={`${siteUrl}/${path}`} isBlog={false} />
            <Hero title={title} />
            <Main>
                <PostsList posts={posts} />
            </Main>
        </Layout>
    );
};

export default Articles;
