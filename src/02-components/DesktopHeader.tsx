import React from 'react';
import { ImageSharpFluid, SiteSiteMetadataHeaderLinks } from '../graphqlTypes';
import { Styles } from '../tokens';
import HeaderLinks from './HeaderLinks';
import HomeLink from './HomeLink';

const styles: Styles = {
    header: {
        WebkitBoxAlign: 'center',
        display: 'flex',
    },
};

interface DesktopHeaderProps {
    headerLinks: Pick<SiteSiteMetadataHeaderLinks, 'label' | 'url'>[];
    icon?: ImageSharpFluid;
    siteTitle?: string;
    headerTitle?: string;
}

const DesktopHeader = ({ headerLinks, icon, siteTitle, headerTitle }: DesktopHeaderProps) => {
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

export default DesktopHeader;
