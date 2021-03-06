/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import BlogPostTemplate from './blog-post';
import { BlogPostQuery } from '../graphqlTypes';

interface RandomPostProps {
    pageContext: {
        allPosts: Pick<BlogPostQuery, 'allPost'>;
    };
}
const RandomPostTemplate = ({ pageContext }: RandomPostProps) => {
    const {
        allPosts: {
            allPost: { nodes: posts },
        },
    } = pageContext;

    const randomGenerator = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomPosition = randomGenerator(0, posts.length - 1);
    const post = posts[randomPosition];
    const data = {
        post,
    };
    return (
        <>
            <BlogPostTemplate data={data} />
        </>
    );
};

export default RandomPostTemplate;
