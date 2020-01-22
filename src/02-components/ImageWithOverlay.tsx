import Img from 'gatsby-image';
import React from 'react';
import { ImageSharpFluid } from '../graphqlTypes';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    container: {
        display: 'grid',
    },
    image: {
        border: `2px solid ${theme.colors.imageGallery.imageBorder}`,
        gridColumn: '1 / -1',
        gridRow: '1 / -1',
    },
    overlay: {
        position: 'relative',
        gridColumn: '1 / -1',
        gridRow: '1 / -1',
        background: '#ffc60032',
        cursor: 'pointer',
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
    },
    button: {
        background: theme.colors.imageGallery.button.background,
        border: `2px solid ${theme.colors.imageGallery.button.border}`,
        color: theme.colors.imageGallery.button.text,
        textAlign: 'center',
        padding: '0.5rem',
    },
};

interface ImageWithOverlayProps {
    altText?: string;
    image: Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
    aspectRatio?: number;
    showOverlay: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const ImageWithOverlay = (props: ImageWithOverlayProps) => {
    const { altText, image, aspectRatio, showOverlay, onClick, onKeyUp } = props;
    const fluid = {
        aspectRatio: aspectRatio || (image && image.aspectRatio) || 1,
        src: (image && image.src) || '',
        srcSet: (image && image.srcSet) || '',
        base64: image && image.base64,
        sizes: (image && image.sizes) || '',
        srcSetWebp: image && image.srcSetWebp,
        srcWebp: image && image.srcWebp,
    };

    return (
        <div css={styles.container}>
            <Img fluid={fluid} alt={altText} style={styles.image} />
            {showOverlay && (
                <div role="button" css={styles.overlay} onClick={onClick} tabIndex={0} onKeyUp={onKeyUp}>
                    <button type="button" css={styles.button}>
                        View &rarr;
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageWithOverlay;
