import { graphql } from 'gatsby';
import React from 'react';
import GlobalStyle from '../01-elements/GlobalStyles';
import { BlogPostShareImageQuery } from '../graphqlTypes';
import { StyleWithOptions, theme } from '../tokens';

const styles: StyleWithOptions<BlogPostShareImageProps> = (props: BlogPostShareImageProps) => {
    const image =
        props.data.post &&
        props.data.post.frontmatter &&
        props.data.post.frontmatter.featuredImage &&
        props.data.post.frontmatter.featuredImage.publicURL;

    return {
        preview: {
            width: `${props.pageContext.width}px`,
            height: `${props.pageContext.height}px`,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5, rgba(0,0,0,0.5),url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            verticalAlign: 'middle',
        },
        title: {
            fontWeight: 'bold',
            fontSize: `${props.pageContext.type === 'twitter' ? '2rem' : '3rem'}`,
            margin: '1rem 2rem',
            color: `${theme.colors.title}`,
            textShadow: `1px 2px 0px ${theme.colors.title}`,
            textAlign: 'center',
        },
        readTime: {
            verticalAlign: 'center',
            fontSize: `${props.pageContext.type === 'twitter' ? '1.5rem' : '2rem'}`,
            textAlign: 'center',
            color: `${theme.colors.paragraph}`,
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
    const timeToRead = post && post.timeToRead && post.timeToRead;
    const minutes = timeToRead && timeToRead === 1 ? `${timeToRead} min` : `${timeToRead} mins`;
    const title = (post && post.frontmatter && post.frontmatter.title) || '';

    return (
        <div css={styles(props).preview}>
            <GlobalStyle />
            <h1 css={styles(props).title}>{title}</h1>
            {minutes && <h2 css={styles(props).readTime}>{minutes}</h2>}
        </div>
    );
};

export default BlogPostShareImage;

export const pageQuery = graphql`
    query BlogPostShareImage($slug: String!) {
        post: mdx(frontmatter: { slug: { eq: $slug } }) {
            timeToRead
            frontmatter {
                title
                featuredImage {
                    publicURL
                }
            }
        }
    }
`;
