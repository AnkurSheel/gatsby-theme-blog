import React from 'react';
import { Styles } from '../tokens';
import TagList from './TagList';

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
            {date && (
                <p>
                    This entry was posted on <time>{date}</time>
                </p>
            )}
            {tags.length > 0 && <TagList tags={tags.map((t) => ({ name: t }))} />}
        </header>
    );
};

export default ContentIntro;
