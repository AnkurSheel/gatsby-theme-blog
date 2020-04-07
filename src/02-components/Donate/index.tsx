import React from 'react';
import 'typeface-cookie';
import useSiteMetadata from '../../hooks/use-site-meta-data';
import { Styles, theme } from '../../tokens';
import coffee from './coffee.svg';

const styles: Styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        borderTop: `solid 2px ${theme.colors.subTitle}`,
        marginTop: '2rem',
        paddingTop: '1em',
        fontSize: '1.5rem',
        flexWrap: 'wrap',
    },
    button: {
        padding: 7,
        // lineHeight: 35,
        height: 51,
        minWidth: 217,
        textDecoration: 'none',
        display: 'inline-flex',
        color: '#ffffff',
        backgroundColor: '#FF813F',
        borderRadius: 5,
        border: 1,
        fontSize: 28,
        letterSpacing: 0,
        boxShadow: '0',
        margin: '0 auto',
        fontFamily: `'Cookie', cursive !important`,
        boxSizing: 'border-box',
        transition: '0.3s all linear',
        '&:hover, &:active, &:focus': {
            textDecoration: 'none',
            boxShadow: '0',
            opacity: '0.85',
            color: '#ffffff',
        },
    },
    image: {
        height: 34,
        width: 35,
        marginBottom: 1,
        boxShadow: 'none',
        border: 'none',
        alignSelf: 'center',
    },
    text: {
        marginLeft: 15,
        alignSelf: 'center',
    },
};

const Donate = () => {
    const siteMetaData = useSiteMetadata();
    const buyMeACoffee = siteMetaData?.buyMeACoffee;

    if (!buyMeACoffee) {
        return <></>;
    }

    return (
        <div css={styles.container}>
            <span css={styles.label}>Enjoy this Article?</span>
            <a css={styles.button} target="_blank" rel="noopener noreferrer" href={buyMeACoffee.link}>
                <img css={styles.image} src={coffee} alt={buyMeACoffee.altText} />
                <span css={styles.text}>{buyMeACoffee.altText}</span>
            </a>
        </div>
    );
};

export default Donate;
