import { css, SerializedStyles } from '@emotion/core';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { colors } from '../tokens';

const stylesWithProps = (props: HeroProps) => {
    return {
        container: css({
            position: 'relative',
            width: '100vw',
            height: '30vh',
            textAlign: 'center',
            marginBottom: '2rem',
        }),
        image: css(
            {
                width: '100%',
                height: '100%',
                backgroundPosition: 'bottom 20% center',
                backgroundSize: 'cover',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
            },
            props.imageStyles
        ),
        textContainer: css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }),
        title: css({
            color: colors.title,
            fontWeight: 'bold',
            fontSize: '2.5rem',
        }),
    };
};

interface HeroProps {
    title: string;
    image?: IFluidObject;
    imageStyles?: SerializedStyles;
}

const Hero = (props: HeroProps) => {
    const styles = stylesWithProps(props);
    const { image, title } = props;
    return (
        <div css={styles.container}>
            {image && (
                <BackgroundImage css={styles.image} Tag="section" fluid={image} fadeIn="soft" preserveStackingContext />
            )}
            <div css={styles.textContainer}>
                <h1 css={styles.title}>{title}</h1>
            </div>
        </div>
    );
};

export default Hero;
