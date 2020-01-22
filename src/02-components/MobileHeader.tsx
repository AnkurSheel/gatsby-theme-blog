import React, { useState } from 'react';
import { ImageSharpFluid, SiteSiteMetadataHeaderLinks } from '../graphqlTypes';
import { StyleWithOptions, theme } from '../tokens';
import HeaderLinks from './HeaderLinks';
import HomeLink from './HomeLink';

type StyleOptions = { isToggledOn: boolean };
const styles: StyleWithOptions<StyleOptions> = ({ isToggledOn }: StyleOptions) => {
    return {
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
        nav: {
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem 0',
            margin: '0px auto',
        },
    };
};

interface MobileHeaderProps {
    headerLinks: Pick<SiteSiteMetadataHeaderLinks, 'label' | 'url'>[];
    icon?: ImageSharpFluid;
    siteTitle?: string;
    headerTitle?: string;
}

const MobileHeader = ({ headerLinks, icon, siteTitle, headerTitle }: MobileHeaderProps) => {
    const [isToggledOn, setToggle] = useState(false);
    const toggle = () => setToggle(!isToggledOn);
    return (
        <>
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
                    <nav css={styles({ isToggledOn }).nav}>
                        <HeaderLinks headerLinks={headerLinks} />
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
        </>
    );
};

export default MobileHeader;
