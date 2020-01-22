import { Global } from '@emotion/core';
import React from 'react';
import { theme } from '../tokens';

const GlobalStyle = () => (
    <Global
        styles={{
            '*, *:before, *:after': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
            },
            'body, h1, h2, h3, h4, p, li, figure, figcaption, blockquote, dl, dd': {
                margin: 0,
            },
            'ul,ol': {
                marginLeft: '1em',
            },
            body: {
                minHeight: '100vh',
                scrollBehavior: 'smooth',
                textRendering: 'optimizeSpeed',
                lineHeight: 1.5,
                color: theme.colors.paragraph,
                background: theme.colors.background,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoue UI', Roboto, Arial, sans-serif",
                fontSize: '16px',
                '& > div': {
                    marginTop: 0,
                },
            },
            a: {
                color: theme.colors.link,
                textDecorationSkipInk: 'auto',
                '&:hover': {
                    textDecorationStyle: 'dashed',
                },
            },
            img: {
                maxWidth: '100%',
                display: 'block',
                height: 'auto',
                border: `2px solid ${theme.colors.imageGallery.imageBorder}`,
            },
            'article > * + *': {
                marginTop: '1em',
            },
            'input, button, textarea, select': {
                font: 'inherit',
            },
            '@media (prefers-reduced-motion: reduce)': {
                animationDuration: '0.01ms !important',
                animationIterationCount: '1 !important',
                transitionDuration: '0.01ms !important',
                scrollBehavior: 'auto !important',
            },
        }}
    />
);

export default GlobalStyle;
