import React, { ReactNode } from 'react';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    article: {
        borderRadius: '20px',
        maxWidth: '70ch',
        // minHeight: '50vh',
        wordWrap: 'break-word',
        backgroundColor: `${theme.colors.backgroundArticle}`,
        margin: '0px auto 2rem auto',
        padding: '2ch',
    },
};

interface ArticleProps {
    children: ReactNode;
}

const Article = (props: ArticleProps) => {
    const { children } = props;
    return <article css={styles.article}>{children}</article>;
};

export default Article;
