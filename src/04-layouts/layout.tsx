import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import GlobalStyle from '../01-elements/GlobalStyles';
import Footer from '../03-composites/Footer';
import Header from '../03-composites/Header';
import { Styles } from '../tokens';

const styles: Styles = {
    siteContent: {
        minHeight: '100vh',
    },
};

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div css={styles.siteContent}>
            <GlobalStyle />
            <Header />
            <div css={styles.siteContent}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
