import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { colors } from '../tokens';

const styles = {
    post: css({
        marginBottom: '1.25rem',
        background: colors.card.background,
        borderRadius: '5px',
    }),
    linkContainer: css({
        textDecoration: 'none',
    }),
    section: css({
        padding: '1em',
    }),
    header: css({
        paddingBottom: '1em',
        color: colors.card.title,
    }),
    excerpt: css({
        paddingBottom: '0.5em',
        color: colors.card.paragraph,
    }),
    readPostLink: css({
        color: `${colors.card.link}`,
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
            backgroundColor: `${colors.card.link}`,
            borderRadius: '0.25rem',
            color: `${colors.card.background}`,
        },
    }),
};

interface PostListItemProps {
    title: string;
    excerpt: string;
    slug: string;
    tags: string[];
}

const PostsListItem = (props: PostListItemProps) => {
    const { title, excerpt, slug, tags } = props;

    const articleLink = `/blog/${slug}`;
    return (
        <div css={styles.post}>
            <Link css={styles.linkContainer} to={articleLink} aria-label={`View ${title} article`}>
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
