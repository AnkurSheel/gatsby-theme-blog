import React from 'react';
import FooterColumn, { FooterColumnData, FooterLinkData } from '../02-components/FooterColumn';
import useSiteMetadata from '../hooks/use-site-config';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    footer: {
        backgroundColor: `${theme.colors.footer.background}`,
        color: `${theme.colors.footer.paragraph}`,
        display: 'flex',
        flexFlow: 'wrap',
        alignItems: 'flex-start',
        borderRadius: '10px',
        margin: '1rem',
        padding: '1rem',
    },
    nav: {},
};

const Footer = () => {
    const siteMetadata = useSiteMetadata();
    if (!siteMetadata) {
        return <></>;
    }

    const { authorName, footerLinks } = siteMetadata;
    const links = (footerLinks && (footerLinks.filter(f => f !== undefined) as FooterColumnData[])) || [];
    return (
        <footer css={styles.footer}>
            <FooterColumn sectionName={`${authorName} © ${new Date().getFullYear()}`} />
            {links.map((column: FooterColumnData) => {
                const links1 = (column.links && (column.links.filter(l => l !== undefined) as FooterLinkData[])) || [];
                return (
                    <FooterColumn
                        sectionName={column.sectionName}
                        links={links1}
                        key={`footer-column-${column.sectionName}`}
                    />
                );
            })}
        </footer>
    );
};

export default Footer;
