import React from 'react';
import DesktopHeader from '../02-components/DesktopHeader';
import { HeaderLinkData } from '../02-components/HeaderLinks';
import MobileHeader from '../02-components/MobileHeader';
import useMedia from '../hooks/use-media';
import useSiteMetadata from '../hooks/use-site-meta-data';
import useSiteImages from '../hooks/use-site-images';
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
        maxWidth: '770px',
        padding: '0 20px',
        alignItems: 'center',
    },
    header: {
        boxAlign: 'center',
        display: 'flex',
    },
};

const Header = () => {
    const siteMetadata = useSiteMetadata();
    const image = useSiteImages((siteMetadata && siteMetadata.headerLinksIcon) || '');
    const isMobile = useMedia<boolean>([`${theme.media.medium}`], [false], true);
    if (!siteMetadata) {
        return <></>;
    }

    const { headerTitle, headerLinks, siteTitle } = siteMetadata;
    const icon = image && image.fluid && image.fluid;
    const links = (headerLinks && (headerLinks.filter(h => h !== undefined) as HeaderLinkData[])) || [];

    return (
        <header css={styles.wrapper}>
            <nav css={styles.nav}>
                {isMobile ? (
                    <MobileHeader headerLinks={links} icon={icon} siteTitle={siteTitle} headerTitle={headerTitle} />
                ) : (
                    <DesktopHeader headerLinks={links} icon={icon} siteTitle={siteTitle} headerTitle={headerTitle} />
                )}
            </nav>
        </header>
    );
};

export default Header;
