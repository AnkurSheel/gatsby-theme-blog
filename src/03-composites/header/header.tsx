import React from 'react';
import useMedia from '../../hooks/use-media';
import { theme } from '../../tokens';
import MobileHeader from './mobile-header';
import { Style } from '../../tokens/types';
import DesktopHeader from './desktop-header';

const styles: Style = {
    header: {
        display: 'flex',
        alignItems: 'center',
        '@media screen and (max-width: 800px)': {
            justifyContent: 'space-between',
            padding: '0 2ch',
            flexDirection: 'row',
            margin: '0 auto',
            maxWidth: '70ch',
        },
        '@media screen and (min-width: 800px)': {
            padding: '2rem 0',
            position: 'fixed',
            minHeight: '100vh',
            textDecoration: 'none',
            flexDirection: 'column',
            width: '20%',
            justifyContent: 'space-evenly',
            maxHeight: '100vh',
            minWidth: '200px',
        },
    },
};

const Header = () => {
    const isDesktop = useMedia<boolean>([`${theme.media.desktop}`], [true], false);

    return isDesktop ? (
        <header css={styles.header}>
            <DesktopHeader />
        </header>
    ) : (
        <header css={styles.header}>
            <MobileHeader />
        </header>
    );
};

export default Header;
