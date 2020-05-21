import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import DesktopHeader from '../03-composites/desktop-header';
import Footer from '../03-composites/Footer';
import { Styles } from '../tokens';

const styles: Styles = {};

interface DesktopLayoutProps {
    children: ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
    return (
        <div>
            <DesktopHeader />
            <div css={styles.siteContent}>{children}</div>
            <Footer />
        </div>
    );
};

export default DesktopLayout;
