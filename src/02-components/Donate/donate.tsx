import React from 'react';
import 'typeface-cookie';
import useSiteMetadata from '../../hooks/use-site-meta-data';
import { Styles, theme } from '../../tokens';
import { CoffeeSvg } from '../../01-elements/icons';

const styles: Styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        borderTop: `solid 2px ${theme.colors.subTitle}`,
        marginTop: '2rem',
        paddingTop: '1em',
        flexWrap: 'wrap',
        flexDirection: 'column',
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
    text: {
        marginLeft: 15,
        alignSelf: 'center',
    },
    label: {
        marginBottom: '1em',
        textAlign: 'center',
    },
};

const Donate = () => {
    const siteMetaData = useSiteMetadata();
    const buyMeACoffee = siteMetaData?.buyMeACoffee;
    const donateText = siteMetaData?.donateText || 'Enjoy this Article?';

    if (!buyMeACoffee) {
        return <></>;
    }

    return (
        <div css={styles.container}>
            <h5 css={styles.label}>{donateText}</h5>
            <a css={styles.button} target="_blank" rel="noopener noreferrer" href={buyMeACoffee.link}>
                <CoffeeSvg />
                <p css={styles.text}>{buyMeACoffee.altText}</p>
            </a>
        </div>
    );
};

export default Donate;
