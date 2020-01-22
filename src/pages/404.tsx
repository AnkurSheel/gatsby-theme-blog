import { SEO } from '@codinators/gatsby-shared-library';
import React from 'react';
import { Cat } from 'react-kawaii';
import { oc } from 'ts-optchain';
import Main from '../02-components/Main';
import RecentPosts from '../02-components/RecentPosts';
import Layout from '../04-layouts/layout';
import useSiteMetadata from '../hooks/use-site-config';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    mainTitle: {
        color: theme.colors.title,
        lineHeight: '1.5',
        textAlign: 'center',
        fontSize: '3rem',
        marginBottom: '2.5rem',
    },
    cat: {
        margin: '2.5rem 0',
        textAlign: 'center',
    },
    text: {
        lineHeight: 1.6,
        margin: '1em 0',
    },
};

const NotFoundPage = () => {
    const siteMetaData = useSiteMetadata();
    const siteUrl = oc(siteMetaData).siteUrl('');
    return (
        <Layout>
            <SEO title="Page Not Found" description="Page Not Found" url={`${siteUrl}/404.html`} isBlog={false} />
            <Main>
                <h1 css={styles.mainTitle}>Oh No! Page Not Found</h1>
                <Cat css={styles.cat} size={160} mood="ko" color={theme.colors.notFound.kawaiiColor} />
                <p css={styles.text}>
                    Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
                </p>
            </Main>
            <Main>
                <h1 css={styles.mainTitle}>Recent Posts</h1>
                <RecentPosts />
            </Main>
        </Layout>
    );
};

export default NotFoundPage;
