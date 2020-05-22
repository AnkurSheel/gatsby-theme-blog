import React, { useState } from 'react';
import HeaderLinks, { HeaderLinkData } from '../02-components/HeaderLinks';
import HomeLink from '../02-components/HomeLink';
import useSiteImages from '../hooks/use-site-images';
import useSiteMetadata from '../hooks/use-site-meta-data';
import { StyleWithOptions, theme } from '../tokens';

type StyleOptions = { isToggledOn: boolean };
const styles: StyleWithOptions<StyleOptions> = ({ isToggledOn }: StyleOptions) => {
    return {
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
        burgerButton: {
            cursor: 'pointer',
            padding: '0.5rem 0.75rem',
            position: 'relative',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
        },
        closeButton: {
            cursor: 'pointer',
            padding: '2rem 1rem',
            position: 'relative',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
        },
        burger: {
            width: '24px',
            height: '2px',
            background: `${isToggledOn ? 'transparent' : theme.colors.header.text}`,
            position: 'absolute',
            left: 0,
            transition: 'all 250ms cubic-bezier(0.86, 0, 0.07, 1)',
            ':before': {
                content: `''`,
                position: 'absolute',
                top: '-8px',
                width: '24px',
                height: '2px',
                background: theme.colors.header.text,
                left: 0,
                transform: `${isToggledOn ? 'rotate(45deg); top: 0' : 'rotate(0)'}`,
                transition: 'all 250ms cubic-bezier(0.86, 0, 0.07, 1)',
            },
            ':after': {
                content: `''`,
                position: 'absolute',
                top: '8px',
                width: '24px',
                height: '2px',
                background: theme.colors.header.text,
                left: 0,
                transform: `${isToggledOn ? 'rotate(-45deg); top: 0' : 'rotate(0)'}`,
                transition: 'all 250ms cubic-bezier(0.86, 0, 0.07, 1)',
            },
        },
        panel: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'flex-start',
        },
        openNav: {
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem 0',
            margin: '0px auto',
        },
    };
};

const MobileHeader = () => {
    const siteMetadata = useSiteMetadata();
    const image = useSiteImages((siteMetadata && siteMetadata.headerLinksIcon) || '');
    const [isToggledOn, setToggle] = useState(false);

    if (!siteMetadata) {
        return <></>;
    }
    const { headerTitle, headerLinks, siteTitle } = siteMetadata;
    const icon = image && image.fluid && image.fluid;
    const links = (headerLinks && (headerLinks.filter((h) => h !== undefined) as HeaderLinkData[])) || [];

    const toggle = () => setToggle(!isToggledOn);
    return (
        <header css={styles({ isToggledOn }).wrapper}>
            <nav css={styles({ isToggledOn }).nav}>
                {!isToggledOn && (
                    <>
                        <HomeLink icon={icon} iconTitle={siteTitle} headerTitle={headerTitle} />
                        <button
                            css={styles({ isToggledOn }).burgerButton}
                            onClick={toggle}
                            aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
                            type="button"
                        >
                            <div css={styles({ isToggledOn }).burger} />
                        </button>
                    </>
                )}
                {isToggledOn && (
                    <div css={styles({ isToggledOn }).panel}>
                        <nav css={styles({ isToggledOn }).openNav}>
                            <HeaderLinks headerLinks={links} />
                        </nav>
                        <button
                            css={styles({ isToggledOn }).closeButton}
                            onClick={toggle}
                            aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
                            type="button"
                        >
                            <div css={styles({ isToggledOn }).burger} />
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default MobileHeader;
