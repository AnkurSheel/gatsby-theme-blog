import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Video, SEO, Quote } from '@codinators/gatsby-shared-library';
import ImageGallery from './src/03-composites/ImageGallery';

const components = { Video, SEO, Quote, ImageGallery };

export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={components}>{element}</MDXProvider>;
};
