import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import { SEO } from '@codinators/gatsby-shared-library';
import Hero from '../03-composites/Hero';
import PostsList from '../03-composites/PostsList';
import Layout from '../04-layouts/layout';
import { PostsByTagQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-config';
import Main from '../02-components/Main';

interface TagsProps {
    data: Pick<PostsByTagQuery, 'posts'>;
    pageContext: {
        tag: string;
    };
    path: string;
}

const Tags = (props: TagsProps) => {
    const siteMetaData = useSiteMetadata();
    const {
        path,
        pageContext: { tag },
        data: {
            posts: { edges: posts },
        },
    } = props;

    const siteUrl = oc(siteMetaData).siteUrl('');

    const pageTitle = `#${tag}`;
    const description = `Posts tagged as '${tag}'`;
    return (
        <Layout>
            <SEO title={pageTitle} description={description} url={`${siteUrl}${path}`} isBlog={false} />
            <Hero title={pageTitle} />

            <Main>
                <h1>Posts tagged as &quot;{tag}&quot;</h1>
                <PostsList posts={posts} />
            </Main>
        </Layout>
    );
};

export default Tags;

export const pageQuery = graphql`
    query PostsByTag($tagRegex: String!) {
        posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { regex: $tagRegex }, published: { eq: true } } }
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
`;
