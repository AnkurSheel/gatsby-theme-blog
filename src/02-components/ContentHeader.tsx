import { css } from '@emotion/core';
import React from 'react';
import TagList, { Tag } from './TagList';

const styles = {
    header: css({
        marginBottom: '2rem',
        fontSize: '0.8rem',
    }),
};
interface ContentIntroProps {
    date: string;
    tags: string[];
}

const ContentIntro = (props: ContentIntroProps) => {
    const { date, tags } = props;

    return (
        <header css={styles.header}>
            <span>
                {date && (
                    <span>
                        This entry was posted on <time>{date}</time>
                    </span>
                )}
                {tags.length > 0 && <TagList tags={tags.map(tag => ({ name: tag }))} />}
            </span>
        </header>
    );
};

export default ContentIntro;
