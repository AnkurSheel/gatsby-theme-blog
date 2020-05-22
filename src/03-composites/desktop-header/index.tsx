import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import HeaderLinks, { HeaderLinkData } from '../../02-components/HeaderLinks';
import useSiteImages from '../../hooks/use-site-images';
import useSiteMetadata from '../../hooks/use-site-meta-data';
import { Styles } from '../../tokens';
import githubsvg from './github.svg';
import linkedinsvg from './linkedin.svg';

const styles: Styles = {
    header: {
        padding: '2rem 0',
        position: 'fixed',
        minHeight: '100vh',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '20%',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '3rem 0',
        maxWidth: '70ch',
        padding: '0 2ch',
        alignItems: 'center',
        flexDirection: 'column',
    },
    icon: {
        margin: '1rem',
        borderRadius: '50%',
        minWidth: 100,
        minHeight: 100,
    },
    link: {
        textDecoration: 'none',
    },
    socialLinks: {
        margin: '0.5rem 0 1rem 0',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    },
    socialButton: {
        width: '28px',
    },
    image: {
        border: 'none',
    },
};

const DesktopHeader = () => {
    const siteMetadata = useSiteMetadata();
    const image = useSiteImages((siteMetadata && siteMetadata.headerLinksIcon) || '');
    if (!siteMetadata) {
        return <></>;
    }

    const { headerTitle, authorName, headerLinks, socialLinks, siteTitle } = siteMetadata;
    const icon = image && image.fluid;
    let links: HeaderLinkData[] = [{ label: headerTitle || 'Home', url: '/' }];

    links = headerLinks ? links.concat(...(headerLinks.filter((h) => h !== undefined) as HeaderLinkData[])) : links;

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
        };
    }

    const twitter = socialLinks?.twitter;
    const github = socialLinks?.github;
    const linkedin = socialLinks?.linkedin;

    return (
        <header css={styles.header}>
            <Link css={styles.home} to="/" aria-label="View home page">
                {fluid && <Img css={styles.icon} fluid={fluid} alt={siteTitle} />}
            </Link>
            <nav css={styles.nav}>{headerLinks && <HeaderLinks headerLinks={links} />}</nav>
            <h4>Connect with me</h4>
            <div css={styles.socialLinks}>
                {twitter && (
                    <a
                        href={twitter.url}
                        className="twitter-follow-button"
                        data-size="large"
                        data-show-screen-name="false"
                        data-show-count="false"
                    >
                        {twitter.text || 'Follow me'}
                    </a>
                )}
                {github?.url && (
                    <a
                        css={styles.socialButton}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={github.url}
                        title={github.text}
                    >
                        <img css={styles.image} src={githubsvg} alt="asd" />
                    </a>
                )}
                {linkedin?.url && (
                    <a
                        css={styles.socialButton}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={linkedin.url}
                        title={linkedin.text}
                    >
                        <img css={styles.image} src={linkedinsvg} alt="asd" />
                    </a>
                )}
            </div>
            <h5>{`${authorName} © ${new Date().getFullYear()}`}</h5>
        </header>
    );
};

export default DesktopHeader;
