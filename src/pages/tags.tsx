import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SEO } from '@codinators/gatsby-shared-library';
import Hero from '../03-composites/Hero';
import Layout from '../04-layouts/layout';
import useSiteMetadata from '../hooks/use-site-config';
import { BlogListQuery, TagsQuery } from '../graphqlTypes';
import Main from '../02-components/Main';
import TagList, { Tag } from '../02-components/TagList';

const Articles = () => {
    const siteMetaData = useSiteMetadata();
    const data: TagsQuery = useStaticQuery(graphql`
        query Tags {
            posts: allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fileAbsolutePath: { regex: "//content/posts//" }, frontmatter: { published: { eq: true } } }
            ) {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);
    const todaysDate = new Date();

    const { group } = data.posts;

    const title = `All Tags`;
    const siteUrl = siteMetaData?.siteUrl || '';
    const path = 'tags';
    const tags: Tag[] = group
        .sort((a, b) => {
            const string1 = a.fieldValue || '';
            const string2 = b.fieldValue || '';
            return string1.toLowerCase().localeCompare(string2.toLowerCase());
        })
        .map(tag => ({ display: `${tag.fieldValue} (${tag.totalCount})`, name: tag.fieldValue || '' }));

    return (
        <Layout>
            <SEO title={title} description={title} url={`${siteUrl}/${path}`} isBlog={false} />
            <Hero title={title} />
            <Main>
                <TagList tags={tags} />
            </Main>
        </Layout>
    );
};

export default Articles;
