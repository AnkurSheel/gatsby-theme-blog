import { SEO } from '@codinators/gatsby-shared-library';
import React from 'react';
import Main from '../02-components/Main';
import Hero from '../03-composites/Hero';
import PostsList from '../03-composites/PostsList';
import Layout from '../04-layouts/default-layout';
import { BlogPostQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-meta-data';

interface BlogListProps {
    pageContext: {
        allPosts: Pick<BlogPostQuery, 'allPost'>;
    };
    path: string;
}

const BlogList = ({ pageContext, path }: BlogListProps) => {
    const siteMetaData = useSiteMetadata();
    const {
        allPosts: {
            allPost: { nodes },
        },
    } = pageContext;

    const title = `All Articles`;
    const siteUrl = siteMetaData?.siteUrl || '';

    const posts = nodes.map((p) => {
        return {
            title: p.title,
            path: p.path,
            excerpt: p.excerpt,
            date: p.date,
            tags: p.tags,
            draft: p.draft,
        };
    });

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

export default BlogList;
