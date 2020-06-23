import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Main from '../02-components/Main';
import SEO from '../02-components/Seo';
import TagList, { Tag } from '../02-components/TagList';
import Hero from '../03-composites/Hero';
import Layout from '../04-layouts/default-layout';
import { TagsQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-meta-data';

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
        .map((tag) => ({ display: `${tag.fieldValue} (${tag.totalCount})`, name: tag.fieldValue || '' }));

    return (
        <Layout>
            <SEO title={title} description={title} url={`${siteUrl}${path}`} isBlog={false} />
            <Hero title={title} />
            <Main>
                <TagList tags={tags} />
            </Main>
        </Layout>
    );
};

export default Articles;
