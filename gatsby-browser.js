import { SEO, Video } from '@codinators/gatsby-shared-library';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Quote from './src/02-components/Quote';
import ImageGallery from './src/03-composites/ImageGallery';

const components = { Video, SEO, Quote, ImageGallery };

export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={components}>{element}</MDXProvider>;
};

