import React from 'react';
import { Maybe, Mdx, MdxFrontmatter } from '../graphqlTypes';
import PostsListItem from './PostsListItem';

interface PostListProps {
    posts: Array<{
        node: Pick<Mdx, 'excerpt'> & {
            frontmatter: Maybe<Pick<MdxFrontmatter, 'date' | 'title' | 'slug'>>;
        };
    }>;
}

const PostsList = (props: PostListProps) => {
    const { posts } = props;

    return (
        <>
            {posts.map(post => {
                const { frontmatter } = post.node;
                const title = (frontmatter && frontmatter.title) || '';
                const excerpt = (frontmatter && post.node.excerpt) || '';
                const slug = (frontmatter && frontmatter.slug) || '';
                return <PostsListItem key={`${slug}`} title={title} excerpt={excerpt} slug={slug} />;
            })}
        </>
    );
};
export default PostsList;
