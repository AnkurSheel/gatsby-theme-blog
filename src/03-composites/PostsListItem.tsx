import { Link } from 'gatsby';
import React from 'react';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    section: {
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
    },
    post: {
        marginBottom: '1.25rem',
        background: theme.colors.card.background,
        borderRadius: '5px',
    },
    linkHeader: {
        textDecoration: 'none',
        color: 'inherit',
    },
    header: {
        color: theme.colors.card.title,
    },
    excerpt: {
        color: theme.colors.card.paragraph,
    },
    readPostLink: {
        color: `${theme.colors.card.link}`,
        marginTop: '0.5rem',
        fontWeight: 'bold',
        lineHeight: 2,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
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
    draft?: boolean;
}

const PostsListItem = (props: PostListItemProps) => {
    const { title, excerpt, path, draft } = props;

    return (
        <div css={styles.post}>
            {draft && <h2 css={styles.header}>Draft Post</h2>}

            <section css={styles.section}>
                <h2 css={styles.header}>
                    <Link css={styles.linkHeader} to={path} aria-label={`View ${title} article`}>
                        {title}
                    </Link>
                </h2>
                <p css={styles.excerpt}>{excerpt}</p>
                <Link css={styles.readPostLink} to={path} aria-label={`View ${title} article`}>
                    Read post ›
                </Link>
            </section>
        </div>
    );
};
export default PostsListItem;
