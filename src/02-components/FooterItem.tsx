import { Link } from 'gatsby';
import React from 'react';
import { SiteSiteMetadataFooterLinksLinks } from '../graphqlTypes';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    item: {
        padding: '0.25rem 0',
    },
    link: {
        textDecoration: 'none',
        padding: '0.25rem 0',
        fontWeight: 'bold',
        color: `${theme.colors.footer.link}`,
        '&:hover': {
            color: theme.colors.footer.background,
            background: theme.colors.footer.link,
        },
    },
};

interface FooterItemProps {
    item: Pick<SiteSiteMetadataFooterLinksLinks, 'label' | 'url'>;
}

const FooterItem = ({ item }: FooterItemProps) => {
    if (!item.url) {
        return <></>;
    }

    if (item.url.startsWith('/')) {
        return (
            <span css={styles.item}>
                <Link css={styles.link} to={item.url}>
                    {item.label}
                </Link>
            </span>
        );
    }
    return (
        <span css={styles.item}>
            <a css={styles.link} href={item.url}>
                {item.label}
            </a>
        </span>
    );
};
export default FooterItem;
