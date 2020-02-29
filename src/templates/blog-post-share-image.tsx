import { graphql } from 'gatsby';
import React from 'react';
import GlobalStyle from '../01-elements/GlobalStyles';
import { BlogPostShareImageQuery } from '../graphqlTypes';
import { StyleWithOptions, theme } from '../tokens';

const styles: StyleWithOptions<BlogPostShareImageProps> = (props: BlogPostShareImageProps) => {
    const image = props.data.post?.featuredImage?.publicURL;
    console.log({ image });
    return {
        preview: {
            position: 'relative',
            width: `${props.pageContext.width}px`,
            height: `${props.pageContext.height}px`,
            backgroundImage: image && `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        },
        textContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            padding: '0 2rem',
        },
        title: {
            fontWeight: 'bold',
            fontSize: `${props.pageContext.type === 'twitter' ? '1.5rem' : '2rem'}`,
            color: `${theme.colors.title}`,
            textAlign: 'center',
        },
        readTime: {
            verticalAlign: 'center',
            fontSize: `${props.pageContext.type === 'twitter' ? '1rem' : '1.5rem'}`,
            color: `${theme.colors.paragraph}`,
            textAlign: 'center',
            ':before': {
                padding: '0.4em',
                content: `'👁'`,
            },
        },
    };
};

interface BlogPostShareImageProps {
    data: Pick<BlogPostShareImageQuery, 'post'>;
    pageContext: {
        width: number;
        height: number;
        type: string;
    };
}

const BlogPostShareImage = (props: BlogPostShareImageProps) => {
    const {
        data: { post },
    } = props;
    if (!post) {
        return <></>;
    }
    const minutes = post.timeToRead === 1 ? `${post.timeToRead} min` : `${post.timeToRead} mins`;

    return (
        <div css={styles(props).preview}>
            <GlobalStyle />
            <div css={styles(props).textContainer}>
                <h1 css={styles(props).title}>{post.title}</h1>
                {minutes && <h2 css={styles(props).readTime}>{minutes}</h2>}
            </div>
        </div>
    );
};

export default BlogPostShareImage;

export const pageQuery = graphql`
    query BlogPostShareImage($id: String!) {
        post(id: { eq: $id }) {
            title
            timeToRead
            featuredImage {
                publicURL
            }
        }
    }
`;
