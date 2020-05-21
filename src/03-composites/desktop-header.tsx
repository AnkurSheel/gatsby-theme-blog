import React from 'react';
import HeaderLinks, { HeaderLinkData } from '../02-components/HeaderLinks';
import HomeLink from '../02-components/HomeLink';
import useSiteImages from '../hooks/use-site-images';
import useSiteMetadata from '../hooks/use-site-meta-data';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    wrapper: {
        position: 'sticky',
        top: 0,
        left: 0,
        margin: '0 auto',
        width: '100%',
        zIndex: 1000,
        backgroundColor: theme.colors.header.background,
        color: theme.colors.header.text,
        fontWeight: 'bold',
        border: `1px solid ${theme.colors.header.border}`,
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: '70ch',
        padding: '0 2ch',
        alignItems: 'center',
    },
    header: {
        boxAlign: 'center',
        WebkitBoxAlign: 'center',
        display: 'flex',
    },
};

const DesktopHeader = () => {
    const siteMetadata = useSiteMetadata();
    const image = useSiteImages((siteMetadata && siteMetadata.headerLinksIcon) || '');
    if (!siteMetadata) {
        return <></>;
    }

    const { headerTitle, headerLinks, siteTitle } = siteMetadata;
    const icon = image && image.fluid && image.fluid;
    const links = (headerLinks && (headerLinks.filter((h) => h !== undefined) as HeaderLinkData[])) || [];

    return (
        <header css={styles.wrapper}>
            <nav css={styles.nav}>
                <HomeLink icon={icon} iconTitle={siteTitle} headerTitle={headerTitle} />
                {headerLinks && (
                    <div css={styles.header}>
                        <HeaderLinks headerLinks={links} />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default DesktopHeader;
