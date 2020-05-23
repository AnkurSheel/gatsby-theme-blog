import React from 'react';
import useSiteMetadata from '../../hooks/use-site-meta-data';
import { Styles, theme } from '../../tokens';
import githubsvg from './github.svg';
import linkedinsvg from './linkedin.svg';

const styles: Styles = {
    socialLinks: {
        margin: '0.5rem 0 1rem 0',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap',
    },
    socialButton: {
        width: '28px',
        margin: '0 auto',
    },
    image: {
        border: 'none',
    },
};

const SocialLinks = () => {
    const siteMetadata = useSiteMetadata();
    if (!siteMetadata) {
        return <></>;
    }
    const { socialLinks } = siteMetadata;

    const twitter = socialLinks?.twitter;
    const github = socialLinks?.github;
    const linkedin = socialLinks?.linkedin;

    return (
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
    );
};

export default SocialLinks;
