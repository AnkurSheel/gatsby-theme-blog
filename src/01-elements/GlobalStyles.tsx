import { Global } from '@emotion/core';
import React from 'react';
import 'typeface-inter';
import { theme } from '../tokens';

const GlobalStyle = () => (
    <Global
        styles={{
            '*, *:before, *:after': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
            },
            html: {
                scrollBehavior: 'smooth',
            },
            'body, h1, h2, h3, h4, h5, p, li, figure, figcaption, blockquote, dl, dd': {
                margin: 0,
            },
            'h1, h2, h3, h4, h5': {
                lineHeight: '1.15',
                textAlign: 'center',
            },
            h1: {
                letterSpacing: '0.1em',
                fontSize: '3.052em',
            },
            h2: {
                fontSize: '2.441em',
            },
            h3: {
                fontSize: '1.953em',
            },
            h4: {
                fontSize: '1.563em',
            },
            h5: {
                fontSize: '1.25em',
            },
            small: {
                fontsize: '0.8em',
            },
            ul: {
                marginLeft: '1rem',
            },
            ol: {
                listStyleType: 'decimal-leading-zero',
                marginLeft: '2rem',
            },
            li: {
                paddingInlineStart: '0.5rem',
                paddingBlockStart: '0.25rem',
            },
            figcaption: {
                textAlign: 'center',
                fontSize: '0.8em',
                fontStyle: 'italic',
            },
            body: {
                minHeight: '100vh',
                letterSpacing: '0.02em',
                scrollBehavior: 'smooth',
                textRendering: 'optimizeSpeed',
                lineHeight: 1.65,
                // fontWeight: 400,
                color: theme.colors.paragraph,
                background: theme.colors.background,
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoue UI', Roboto, Arial, sans-serif",
                fontSize: '18px',
                '& > div': {
                    marginTop: 0,
                },
            },
            'h2 + *': {
                marginTop: '1rem',
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
