import React from 'react';
import { GithubSvg, LinkedinSvg, RssSvg, TwitterSvg } from '../../01-elements/icons';
import useSiteMetadata from '../../hooks/use-site-meta-data';
import { Styles } from '../../tokens';

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
    const rss = socialLinks?.rss;

    return (
        <div css={styles.socialLinks}>
            {twitter?.url && (
                <a
                    css={styles.socialButton}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={twitter.url}
                    title={twitter.text}
                >
                    <TwitterSvg />
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
            {rss?.url && (
                <a css={styles.socialButton} target="_blank" rel="noopener noreferrer" href={rss.url} title={rss.text}>
                    <RssSvg />
                </a>
            )}
        </div>
    );
};

export default SocialLinks;
