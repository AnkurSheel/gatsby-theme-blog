/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { theme, Styles } from '../../tokens';

type QuoteProps = {
    quote: string;
    author?: string;
};

const styles: Styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
    },
    container: {
        borderLeftColor: theme.colors.quote.borderColor,
        borderLeftStyle: 'solid',
        borderLeftWidth: '0.5em',
        maxWidth: '40ch',
        fontSize: '1.5rem',
        padding: '0.5em 1em',
    },

    blockquote: {
        fontStyle: 'italic',
        margin: '.75em 1.5em',
        color: theme.colors.quote.quoteColor,
        '&:before': {
            content: '"\\201C"',
            margin: '0 0.25em 0 -.75em',
            color: theme.colors.quote.quoteColor,
        },
        '&:after': {
            content: '"\\201D"',
            margin: '0',
            color: theme.colors.quote.quoteColor,
        },
    },
    author: {
        color: theme.colors.quote.authorColor,
        fontstyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'right',
    },
};

export const Quote = (props: QuoteProps) => {
    const { quote, author } = props;

    return (
      <div css={styles.root}>
        <div css={styles.container}>
          <blockquote css={styles.blockquote}>{quote}</blockquote>
          {author && (
            <div css={styles.author}>
              -
              {author}
            </div>
)}
        </div>
      </div>
    );
};

Quote.defaultProps = {
    author: null,
};
export default Quote;
