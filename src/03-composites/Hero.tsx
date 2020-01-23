import { CSSObject } from '@emotion/core';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { StyleWithOptions, theme } from '../tokens';

const styles: StyleWithOptions<HeroProps> = props => {
    return {
        container: {
            minHeight: '30vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: '100%',
            height: '100%',
            backgroundPosition: 'bottom 20% center',
            backgroundSize: 'cover',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
            ...props.imageStyles,
        },
        title: {
            color: theme.colors.title,
            fontWeight: 'bold',
            fontSize: '2.5rem',
            textAlign: 'center',
        },
    };
};

interface HeroProps {
    title: string;
    image?: IFluidObject;
    imageStyles?: CSSObject;
}

const Hero = (props: HeroProps) => {
    const { image, title } = props;
    return (
        <div css={styles(props).container}>
            {image && (
                <BackgroundImage
                    css={styles(props).image}
                    Tag="section"
                    fluid={image}
                    fadeIn="soft"
                    preserveStackingContext
                />
            )}
            <h1 css={styles(props).title}>{title}</h1>
        </div>
    );
};

export default Hero;
