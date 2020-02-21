import Img from 'gatsby-image';
import React from 'react';
import useSiteImages from '../hooks/use-site-images';
import { Styles } from '../tokens';

const styles: Styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        borderTop: 'solid 1px white',
        padding: '1em',
        fontSize: '1.5rem',
        flexWrap: 'wrap',
    },
    label: {},
    image: {
        marginLeft: '1em',
        width: 200,
        height: 38,
    },
};

const Donate = () => {
    const image = useSiteImages('coffee.png');
    return (
        <div css={styles.container}>
            <span css={styles.label}>Enjoy this Blog?</span>
            <a href="https://www.buymeacoffee.com/ankursheel" target="_blank" rel="noopener noreferrer">
                <Img fluid={image?.fluid} alt="Buy Me A Coffee" style={styles.image} />
            </a>
        </div>
    );
};

export default Donate;
