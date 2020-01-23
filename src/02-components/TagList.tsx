import { css } from '@emotion/core';
import slugify from '@sindresorhus/slugify';
import { Link } from 'gatsby';
import React from 'react';
import { colors } from '../tokens';

const styles = {
    tagsList: css({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    tag: css({
        background: colors.tag.background,
        color: colors.tag.link,
        margin: '1rem 1rem 0 0',
        listStyle: 'none',
        borderRadius: '1.5em',
        padding: '0.25em 1em',
        ':hover': {
            cursor: 'pointer',
            background: colors.tag.link,
            color: colors.tag.background,
        },
    }),
    link: css({
        textDecoration: 'none',
        color: 'inherit',
        border: 'none',
        ':hover': {
            border: 'none',
        },
    }),
};

export type Tag = {
    display?: string;
    name: string;
};

interface TagListProps {
    tags: Tag[];
}

export const TagList = (props: TagListProps) => {
    const { tags } = props;

    return (
        <ul css={styles.tagsList}>
            {tags.map(t => {
                const tag = slugify(t.name);
                return (
                    <li css={styles.tag} key={`tag-list-${tag}`}>
                        <Link css={styles.link} to={`/tags/${tag}`}>
                            {t.display ?? t.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default TagList;
