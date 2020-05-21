import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import Footer from '../03-composites/Footer';
import MobileHeader from '../03-composites/mobile-header';
import { Styles } from '../tokens';

const styles: Styles = {};

interface MobileLayoutProps {
    children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <>
            <MobileHeader />
            <div css={styles.siteContent}>{children}</div>
            <Footer />
        </>
    );
};

export default MobileLayout;
