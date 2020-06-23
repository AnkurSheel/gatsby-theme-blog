import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import GlobalStyle from '../../01-elements/GlobalStyles';
import Monetization from '../../02-components/Monetization';
import Footer from '../../03-composites/Footer';
import Header from '../../03-composites/header';
import useMedia from '../../hooks/use-media';
import { Styles, theme } from '../../tokens';

const styles: Styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (min-width: 800px)': {
            flexDirection: 'row',
        },
    },
    aside: {
        backgroundColor: theme.colors.header.background,
        color: theme.colors.header.text,
        '@media screen and (max-width: 800px)': {
            zIndex: 1000,
            position: 'sticky',
            top: 0,
            left: 0,
            margin: '0 auto',
            width: '100%',
            border: `1px solid ${theme.colors.header.border}`,
        },
        '@media screen and (min-width: 800px)': {
            minHeight: '100vh',
            flex: '0 0 20%',
            maxWidth: '20%',
            minWidth: '19ch',
        },
    },
    siteContent: {
        flex: '1 0 auto',
        width: '100%',
        '@media screen and (min-width: 800px)': {
            maxWidth: '80%',
        },
    },
};

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const isDesktop = useMedia<boolean>([`${theme.media.desktop}`], [true], false);

    return (
        <div css={styles.container}>
            <GlobalStyle />
            <Monetization />
            <aside css={styles.aside}>
                <Header />
            </aside>
            <div css={styles.siteContent}>{children}</div>
            {!isDesktop && <Footer />}
        </div>
    );
};

export default Layout;
