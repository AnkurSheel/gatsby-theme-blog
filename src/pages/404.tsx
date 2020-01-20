import { SEO } from '@codinators/gatsby-shared-library';
import { css } from '@emotion/core';
import React from 'react';
import { Cat } from 'react-kawaii';
import { oc } from 'ts-optchain';
import Wrapper from '../01-elements/Wrapper';
import RecentPosts from '../02-components/RecentPosts';
import Layout from '../04-layouts/layout';
import useSiteMetadata from '../hooks/use-site-config';
import { colors } from '../tokens';

const styles = {
    mainTitle: css({
        color: colors.title,
        lineHeight: '1.5',
        textAlign: 'center',
        fontSize: '3rem',
        marginBottom: '2.5rem',
    }),
    cat: css({
        margin: '2.5rem 0',
        textAlign: 'center',
    }),
    text: css({
        lineHeight: 1.6,
        margin: '1em 0',
    }),
};

const NotFoundPage = () => {
    const siteMetaData = useSiteMetadata();
    const siteUrl = oc(siteMetaData).siteUrl('');
    return (
        <Layout>
            <SEO title="Page Not Found" description="Page Not Found" url={`${siteUrl}/404.html`} isBlog={false} />
            <main css={Wrapper}>
                <h1 css={styles.mainTitle}>Oh No! Page Not Found</h1>
                <Cat css={styles.cat} size={160} mood="ko" color={colors.notFound.kawaiiColor} />
                <p css={styles.text}>
                    Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
                </p>
            </main>
            <main css={Wrapper}>
                <h1 css={styles.mainTitle}>Recent Posts</h1>
                <RecentPosts />
            </main>
        </Layout>
    );
};

export default NotFoundPage;
