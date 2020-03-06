import React from 'react';
import { Styles } from '../tokens';
import Content from './Content';

const styles: Styles = {
    article: {},
};

interface ArticleProps {
    body: string;
    date: string;
    tags: string[];

    path?: string | undefined;
}

const Article = (props: ArticleProps) => {
    const { body, date, tags, path } = props;
    return (
        <article css={styles.article}>
            <Content content={body} date={date} tags={tags} path={path} />
        </article>
    );
};

export default Article;
