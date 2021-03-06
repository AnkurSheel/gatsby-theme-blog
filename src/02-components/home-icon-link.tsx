import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { ImageSharpFluid } from '../graphqlTypes';
import { Styles } from '../tokens';

const styles: Styles = {
    home: {
        zIndex: 10,
        color: 'inherit',
        padding: '0.5rem 0.5rem 0.5rem 0',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    icon: {
        margin: '1rem',
        borderRadius: '50%',
        minWidth: 100,
        minHeight: 100,
        '@media screen and (max-width: 800px)': {
            width: '3rem',
            height: '3rem',
            marginRight: '1rem',
        },
    },
    title: {},
};

interface HomeLinkProps {
    icon?: ImageSharpFluid;
    iconTitle?: string;

    headerTitle?: string;
}

const HomeIconLink = ({ icon, iconTitle, headerTitle }: HomeLinkProps) => {
    let fluid: FluidObject | undefined;
    if (icon) {
        fluid = {
            aspectRatio: icon.aspectRatio || 1,
            src: icon.src || '',
            srcSet: icon.srcSet || '',
            base64: icon.base64,
            sizes: icon.sizes || '',
            srcSetWebp: icon.srcSetWebp,
            srcWebp: icon.srcWebp,
            tracedSVG: icon.tracedSVG,
        };
    }
    return (
        <Link css={styles.home} to="/" aria-label="View home page">
            {fluid && <Img css={styles.icon} fluid={fluid} alt={iconTitle} title={iconTitle} />}
            {headerTitle && <p css={styles.title}>{headerTitle}</p>}
        </Link>
    );
};

export default HomeIconLink;
