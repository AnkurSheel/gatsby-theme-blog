/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */
import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../../hooks/use-site-meta-data';

interface SEOProps {
    isBlog: boolean;
    title: string;
    description: string;
    url: string;
    canonicalUrl?: string;
    imageFacebook?: string;
    imageTwitter?: string;
}

const SEO = (props: SEOProps) => {
    const { isBlog, title, imageFacebook, imageTwitter, description, url, canonicalUrl } = props;

    const siteMetaData = useSiteMetadata();
    if (!siteMetaData) {
        return <></>;
    }
    const { twitterUsername } = siteMetaData;

    return (
        <Helmet title={title}>
            <html lang="en" />
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl ?? url} />

            {/* Google / Search Engine Tags */}
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={imageFacebook} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content={isBlog ? 'article' : 'website'} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {imageFacebook && <meta property="og:image" content={imageFacebook} />}
            {imageFacebook && imageFacebook.indexOf('https') > -1 && (
                <meta property="og:image:secure_url" content={imageFacebook} />
            )}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {imageTwitter && <meta name="twitter:image" content={imageTwitter} />}
            {imageTwitter && imageTwitter.indexOf('https') > -1 && (
                <meta name="twitter:image:secure_url" content={imageTwitter} />
            )}
        </Helmet>
    );
};

export default SEO;
