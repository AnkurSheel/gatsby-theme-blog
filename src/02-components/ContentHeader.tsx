import React from 'react';
import { Styles } from '../tokens';
import TagList, { Tag } from './TagList';

const styles: Styles = {
    header: {
        marginBottom: '2rem',
        fontSize: '0.8rem',
    },
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
                {tags.length > 0 && <TagList tags={tags.map(t => ({ name: t }))} />}
            </span>
        </header>
    );
};

export default ContentIntro;
