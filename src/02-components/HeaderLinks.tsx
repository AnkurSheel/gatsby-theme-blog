import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { SiteSiteMetadataHeaderLinks } from '../graphqlTypes';
import { colors } from '../tokens';

const styles = {
    link: css({
        color: `${colors.textLightest}`,
        padding: '0.5rem',
        textDecoration: 'none',
    }),
};
export type HeaderLinkData = Pick<SiteSiteMetadataHeaderLinks, 'label' | 'url'>;

interface HeaderLinkProps {
    headerLinks: HeaderLinkData[];
}

const HeaderLinks = ({ headerLinks }: HeaderLinkProps) => {
    return (
        <>
            {headerLinks.map(headerLink => {
                return (
                    headerLink.url &&
                    headerLink.label && (
                        <Link
                            css={styles.link}
                            to={headerLink.url}
                            key={`header-link-${headerLink.url}`}
                            aria-label={`View ${headerLink.label} page`}
                        >
                            {headerLink.label}
                        </Link>
                    )
                );
            })}
        </>
    );
};

export default HeaderLinks;
