import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import DesktopHeader from '../03-composites/desktop-header';
import Footer from '../03-composites/Footer';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    container: {
        display: 'flex',
        flex: '0 1 auto',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    header: {
        minHeight: '100vh',
        flex: '0 0 20%',
        maxWidth: '20%',
        minWidth: '20%',
        backgroundColor: theme.colors.header.background,
        color: theme.colors.header.text,
    },
    siteContent: {
        maxWidth: '80%',
        flex: '1 0 auto',
    },
};

interface DesktopLayoutProps {
    children: ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
    return (
        <div css={styles.container}>
            <aside css={styles.header}>
                <DesktopHeader />
            </aside>
            <div css={styles.siteContent}>{children}</div>
            <Footer />
        </div>
    );
};

export default DesktopLayout;
