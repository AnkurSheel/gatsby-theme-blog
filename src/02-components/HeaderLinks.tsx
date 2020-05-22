import { Link } from 'gatsby';
import React from 'react';
import { SiteSiteMetadataHeaderLinks } from '../graphqlTypes';
import { Styles } from '../tokens';

const styles: Styles = {
    link: {
        textDecoration: 'none',
        margin: '0.75rem',
    },
};
export type HeaderLinkData = Pick<SiteSiteMetadataHeaderLinks, 'label' | 'url'>;

interface HeaderLinkProps {
    headerLinks: HeaderLinkData[];
}

const HeaderLinks = ({ headerLinks }: HeaderLinkProps) => {
    return (
        <>
            {headerLinks.map((headerLink) => {
                return (
                    headerLink.url &&
                    headerLink.label && (
                        <Link
                            css={styles.link}
                            to={headerLink.url}
                            key={`header-link-${headerLink.url}`}
                            aria-label={`View ${headerLink.label} page`}
                        >
                            <h5>{headerLink.label}</h5>
                        </Link>
                    )
                );
            })}
        </>
    );
};

export default HeaderLinks;
