import { Quote as QuoteComponent } from '@codinators/gatsby-shared-library';
import React from 'react';
import { theme } from '../../tokens';

declare type QuoteProps = {
    quote: string;
    author?: string;
};

const Quote = (props: QuoteProps) => {
    return (
        <QuoteComponent
            quoteColor={theme.colors.quote.quoteColor}
            borderColor={theme.colors.quote.borderColor}
            authorColor={theme.colors.quote.authorColor}
            {...props}
        />
    );
};

export default Quote;
