import React from 'react';
import { SiteSiteMetadataFooterLinks, SiteSiteMetadataFooterLinksLinks } from '../graphqlTypes';
import { Styles } from '../tokens';
import FooterItem from './FooterItem';

const styles: Styles = {
    column: {
        flex: '1 auto',
        flexDirection: 'column',
        marginBottom: '1em',
        display: 'flex',
        paddingRight: '1em',
    },
    title: {
        margin: '0 0 1rem',
    },
};

export type FooterLinkData = Pick<SiteSiteMetadataFooterLinksLinks, 'label' | 'url'>;

type FooterSectionData = Pick<SiteSiteMetadataFooterLinks, 'sectionName'> | string;

export type FooterColumnData = {
    sectionName: FooterSectionData;
    links: (FooterLinkData | undefined)[] | undefined;
};

interface FooterColumnProps {
    sectionName?: FooterSectionData;
    links?: FooterLinkData[];
}

const FooterColumn = ({ sectionName, links }: FooterColumnProps) => {
    return (
        <div css={styles.column}>
            {sectionName && <h5 css={styles.title}>{sectionName}</h5>}
            {links &&
                links.map(item => {
                    return <FooterItem item={item} key={`footer-column-item-${item.label}`} />;
                })}
        </div>
    );
};

export default FooterColumn;
