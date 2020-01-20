import { css } from '@emotion/core';
import React from 'react';
import { ImageSharpFluid, SiteSiteMetadataHeaderLinks } from '../graphqlTypes';
import HeaderLinks from './HeaderLinks';
import HomeLink from './HomeLink';

export const styles = {
    header: css({
        WebkitBoxAlign: 'center',
        display: 'flex',
    }),
};

interface DesktopHeaderProps {
    headerLinks: Pick<SiteSiteMetadataHeaderLinks, 'label' | 'url'>[];
    icon?: ImageSharpFluid;
    siteTitle?: string;
    headerTitle?: string;
}

export const DesktopHeader = ({ headerLinks, icon, siteTitle, headerTitle }: DesktopHeaderProps) => {
    return (
        <>
            <HomeLink icon={icon} iconTitle={siteTitle} headerTitle={headerTitle} />
            {headerLinks && (
                <div css={styles.header}>
                    <HeaderLinks headerLinks={headerLinks} />
                </div>
            )}
        </>
    );
};
