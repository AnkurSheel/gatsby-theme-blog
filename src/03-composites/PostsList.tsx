import React from 'react';
import { Post } from '../graphqlTypes';
import PostsListItem from './PostsListItem';

interface PostListProps {
    posts: Pick<Post, 'title' | 'path' | 'excerpt' | 'date' | 'tags' | 'draft'>[];
}

const PostsList = ({ posts }: PostListProps) => {
    return (
        <>
            {posts.map(post => {
                return (
                    <PostsListItem
                        key={post.path}
                        title={post.title}
                        excerpt={post.excerpt}
                        path={post.path}
                        draft={post.draft}
                    />
                );
            })}
        </>
    );
};
export default PostsList;
