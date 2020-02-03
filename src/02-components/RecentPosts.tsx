import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { RecentPostsQuery } from '../graphqlTypes';
import { Styles } from '../tokens';

const styles: Styles = {
    recentPosts: {
        listStyle: 'none',
    },
    recentPostItem: {
        marginTop: '0.5em',
    },
};

const RecentPosts = () => {
    const data: RecentPostsQuery = useStaticQuery(graphql`
        query RecentPosts {
            allPost(sort: { fields: date, order: DESC }, filter: { draft: { eq: false } }, limit: 5) {
                nodes {
                    title
                    path
                }
            }
        }
    `);

    const posts = data.allPost.nodes;

    return (
        <ul css={styles.recentPosts}>
            {posts.map(post => {
                return (
                    <li key={post.path} css={styles.recentPostItem}>
                        <Link to={post.path}>{post.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
export default RecentPosts;
