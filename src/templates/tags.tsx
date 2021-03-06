import { graphql } from 'gatsby';
import React from 'react';
import Main from '../02-components/Main';
import SEO from '../02-components/Seo';
import Hero from '../03-composites/Hero';
import PostsList from '../03-composites/PostsList';
import Layout from '../04-layouts/default-layout';
import { PostsByTagQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-meta-data';

interface TagsProps {
    data: PostsByTagQuery;
    pageContext: {
        tag: string;
    };
    path: string;
}

const Tags = (props: TagsProps) => {
    const siteMetaData = useSiteMetadata();
    const {
        data,
        pageContext: { tag },
        path,
    } = props;

    if (!siteMetaData || !tag) {
        return <></>;
    }

    const siteUrl = siteMetaData.siteUrl || '';
    const title = `Posts tagged as '${tag}'`;
    return (
        <Layout>
            <SEO title={title} description={title} url={`${siteUrl}${path}`} isBlog={false} />
            <Hero title={title} />

            <Main>
                <PostsList posts={data.allPost.nodes} />
            </Main>
        </Layout>
    );
};

export default Tags;

export const pageQuery = graphql`
    query PostsByTag($tagRegex: String!, $date: Date) {
        allPost(
            sort: { fields: date, order: DESC }
            filter: { tags: { regex: $tagRegex }, draft: { eq: false }, date: { lte: $date } }
        ) {
            nodes {
                date(formatString: "DD MMMM, YYYY")
                title
                tags
                path
                excerpt
            }
        }
    }
`;
