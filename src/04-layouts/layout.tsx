import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import GlobalStyle from '../01-elements/GlobalStyles';
import useMedia from '../hooks/use-media';
import { Styles, theme } from '../tokens';
import DesktopLayout from './desktop-layout';
import MobileLayout from './mobile-layout';

const styles: Styles = {
    siteContent: {
        minHeight: '100vh',
    },
};

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const isMobile = useMedia<boolean>([`${theme.media.medium}`], [false], true);
    return (
        <div css={styles.siteContent}>
            <GlobalStyle />
            {isMobile ? <MobileLayout>{children}</MobileLayout> : <DesktopLayout>{children}</DesktopLayout>}
        </div>
    );
};

export default Layout;
