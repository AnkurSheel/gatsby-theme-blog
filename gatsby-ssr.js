/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import components from './src/mdx-provider-components';

export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={components}>{element}</MDXProvider>;
};
