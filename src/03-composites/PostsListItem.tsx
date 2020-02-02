import { Link } from 'gatsby';
import React from 'react';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    post: {
        marginBottom: '1.25rem',
        background: theme.colors.card.background,
        borderRadius: '5px',
    },
    linkContainer: {
        textDecoration: 'none',
    },
    section: {
        padding: '1em',
    },
    header: {
        paddingBottom: '1em',
        color: theme.colors.card.title,
    },
    excerpt: {
        paddingBottom: '0.5em',
        color: theme.colors.card.paragraph,
    },
    readPostLink: {
        color: `${theme.colors.card.link}`,
        width: '100%',
        margin: '1rem auto 0 auto',
        fontWeight: 'bold',
        lineHeight: 2,
        fontsize: '0.75rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        border: 'none',
        '&:hover': {
            backgroundColor: `${theme.colors.card.link}`,
            borderRadius: '0.25rem',
            color: `${theme.colors.card.background}`,
        },
    },
};

interface PostListItemProps {
    title: string;
    excerpt: string;
    path: string;
}

const PostsListItem = (props: PostListItemProps) => {
    const { title, excerpt, path } = props;

    return (
        <div css={styles.post}>
            <Link css={styles.linkContainer} to={path} aria-label={`View ${title} article`}>
                <section css={styles.section}>
                    <h2 css={styles.header}>{title}</h2>
                    <p css={styles.excerpt}>{excerpt}</p>
                    <p css={styles.readPostLink}>Read post ›</p>
                </section>
            </Link>
        </div>
    );
};
export default PostsListItem;
