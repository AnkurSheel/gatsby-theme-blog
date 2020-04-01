import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SEO } from '@codinators/gatsby-shared-library';
import Hero from '../03-composites/Hero';
import Layout from '../04-layouts/layout';
import useSiteMetadata from '../hooks/use-site-meta-data';
import { TagsQuery } from '../graphqlTypes';
import Main from '../02-components/Main';
import TagList, { Tag } from '../02-components/TagList';

const Articles = () => {
    const siteMetaData = useSiteMetadata();
    const data: TagsQuery = useStaticQuery(graphql`
        query Tags {
            allPost(sort: { fields: date, order: DESC }, filter: { draft: { eq: false } }) {
                group(field: tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);

    const { group } = data.allPost;

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