import React from 'react';
import HeaderLinks, { HeaderLinkData } from '../../02-components/HeaderLinks';
import useSiteImages from '../../hooks/use-site-images';
import useSiteMetadata from '../../hooks/use-site-meta-data';
import { Styles, theme } from '../../tokens';
import HomeIconLink from '../../02-components/home-icon-link';
import SocialLinks from '../social-links';

const styles: Styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '3rem 0',
        maxWidth: '70ch',
        padding: '0 2ch',
        alignItems: 'center',
        flexDirection: 'column',
    },
    footer: {
        display: 'flex',
        alignItems: 'flex-start',
        margin: '0 0.5rem',
        justifyContent: 'center',
        flexDirection: 'column',
    },
};

const DesktopHeader = () => {
    const siteMetadata = useSiteMetadata();
    const image = useSiteImages((siteMetadata && siteMetadata.headerLinksIcon) || '');
    if (!siteMetadata) {
        return <></>;
    }

    const { headerTitle, headerLinks, authorName, siteTitle } = siteMetadata;
    const icon = image && image.fluid;
    let links: HeaderLinkData[] = [{ label: headerTitle || 'Home', url: '/' }];

    links = headerLinks ? links.concat(...(headerLinks.filter((h) => h !== undefined) as HeaderLinkData[])) : links;

    return (
        <>
            <HomeIconLink icon={icon} iconTitle={siteTitle} />
            <nav css={styles.nav}>{headerLinks && <HeaderLinks headerLinks={links} />}</nav>
            <footer css={styles.footer}>
                <h4>Connect with me</h4>
                <SocialLinks />
                <h5>{`${authorName} © ${new Date().getFullYear()}`}</h5>
            </footer>
        </>
    );
};

export default DesktopHeader;
