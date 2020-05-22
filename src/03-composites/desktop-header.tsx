import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import HeaderLinks, { HeaderLinkData } from '../02-components/HeaderLinks';
import useSiteImages from '../hooks/use-site-images';
import useSiteMetadata from '../hooks/use-site-meta-data';
import { Styles } from '../tokens';

const styles: Styles = {
    header: {
        padding: '2rem 0',
        position: 'fixed',
        minHeight: '100vh',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '20%',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '3rem 0',
        maxWidth: '70ch',
        padding: '0 2ch',
        alignItems: 'center',
        flexDirection: 'column',
    },
    icon: {
        margin: '1rem',
        borderRadius: '50%',
        minWidth: 100,
        minHeight: 100,
    },
    link: {
        textDecoration: 'none',
    },
};

const DesktopHeader = () => {
    const siteMetadata = useSiteMetadata();
    const image = useSiteImages((siteMetadata && siteMetadata.headerLinksIcon) || '');
    if (!siteMetadata) {
        return <></>;
    }

    const { headerTitle, headerLinks, siteTitle } = siteMetadata;
    const icon = image && image.fluid;
    let links: HeaderLinkData[] = [{ label: headerTitle || 'Home', url: '/' }];

    links = headerLinks ? links.concat(...(headerLinks.filter((h) => h !== undefined) as HeaderLinkData[])) : links;

    let fluid: FluidObject | undefined;
    if (icon) {
        fluid = {
            aspectRatio: icon.aspectRatio || 1,
            src: icon.src || '',
            srcSet: icon.srcSet || '',
            base64: icon.base64,
            sizes: icon.sizes || '',
            srcSetWebp: icon.srcSetWebp,
            srcWebp: icon.srcWebp,
        };
    }

    return (
        <header css={styles.header}>
            <Link css={styles.home} to="/" aria-label="View home page">
                {fluid && <Img css={styles.icon} fluid={fluid} alt={siteTitle} />}
            </Link>
            <nav css={styles.nav}>{headerLinks && <HeaderLinks headerLinks={links} />}</nav>
        </header>
    );
};

export default DesktopHeader;
