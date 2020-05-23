import React from 'react';
import useSiteMetadata from '../../hooks/use-site-meta-data';
import { Styles } from '../../tokens';
import { GithubSvg, LinkedinSvg } from '../../01-elements/icons';

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
                    <GithubSvg />
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
                    <LinkedinSvg />
                </a>
            )}
        </div>
    );
};

export default SocialLinks;
