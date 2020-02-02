import React from 'react';
import { Post } from '../graphqlTypes';
import PostsListItem from './PostsListItem';

interface PostListProps {
    posts: Pick<Post, 'title' | 'path' | 'excerpt' | 'date' | 'tags'>[];
}

const PostsList = ({ posts }: PostListProps) => {
    return (
        <>
            {posts.map(post => {
                return <PostsListItem key={post.path} title={post.title} excerpt={post.excerpt} path={post.path} />;
            })}
        </>
    );
};
export default PostsList;
