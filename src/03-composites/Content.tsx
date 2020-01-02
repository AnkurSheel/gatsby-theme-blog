import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import ContentHeader from '../02-components/ContentHeader';

const styles = {
    body: css({
        '& > h2': {
            paddingTop: '2rem',
            marginTop: '2rem',
            borderTop: '2px solid #b1b1b1',
        },
        '& > h3': {
            borderTop: '1px dashed #b1b1b1',
            marginTop: '1rem',
            paddingTop: '2rem',
        },
        '& > p': {
            margin: '1em 0 0 0',
        },
        figcaption: {
            textAlign: 'center',
            fontSize: '0.8em',
            fontStyle: 'italic',
        },
        '.gatsby-highlight-code-line': {
            backgroundColor: '#707070',
            display: 'block',
            alignItems: 'center',
            marginLeft: '-1em',
            marginRight: '-1em',
            paddingLeft: '0.75em',
            paddingRight: '1em',
            borderLeft: '0.25em solid #f99',
        },
        /**
         * Add back the container background-color, border-radius, padding, margin
         * and overflow that we removed from <pre>.
         */
        '.gatsby-highlight': {
            borderRadius: '0.3em',
            margin: '0.5em 0',
            padding: '1em',
            overflow: ' auto',
        },
        // /**
        //  * Remove the default PrismJS theme background-color, border-radius, margin,
        //  * padding and overflow.
        //  * 1. Make the element just wide enough to fit its content.
        //  * 2. Always fill the visible space in .gatsby-highlight.
        //  * 3. Adjust the position of the line numbers
        //  */
        '.gatsby-highlight pre[class*="language-"]': {
            margin: 0,
            padding: 0,
            overflow: 'initial',
            float: 'left',
            minWidth: '100%',
        },
        ".gatsby-highlight pre[class*='language-'].line-numbers": {
            paddingLeft: '2.8em',
        },
    }),
};

interface ContentProps {
    content: string;
    date?: string;
    tags?: string[];

    path?: string | undefined;
}

const Content = (props: ContentProps) => {
    const { content, date, tags, path } = props;

    return (
        <section>
            {tags && date && <ContentHeader date={date} tags={tags} />}
            <div css={styles.body}>
                <MDXRenderer path={path}>{content}</MDXRenderer>
            </div>
        </section>
    );
};

export default Content;
