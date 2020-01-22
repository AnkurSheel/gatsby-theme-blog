import Img from 'gatsby-image';
import React, { useEffect } from 'react';
import { ImageSharpFluid } from '../graphqlTypes';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    overlay: {
        background: theme.colors.overlay,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    modal: {
        background: theme.colors.modal.background,
        borderRadius: '10px',
        minWidth: '300px',
        width: '50vw',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    container: {
        border: `5px solid ${theme.colors.modal.border}`,
    },
    button: {
        background: theme.colors.modal.button.background,
        border: `1px solid ${theme.colors.modal.button.border}`,
        color: theme.colors.modal.button.color,
        textAlign: 'center',
        padding: '0.5rem 1rem',
        margin: '0.5rem 1rem',
        cursor: 'pointer',
    },
    caption: {
        margin: '0.5rem auto 1rem auto',
        textAlign: 'center',
        fontSize: '0.8em',
        fontStyle: 'italic',
        color: theme.colors.modal.text,
    },
};

export type LightBoxModalImage = {
    image: Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
    caption: string | undefined;
};

interface LightBoxModalProps {
    image: LightBoxModalImage;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LightBoxModal = (props: LightBoxModalProps) => {
    const {
        onClick,
        image: { image, caption },
    } = props;
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const fluid = {
        aspectRatio: image.aspectRatio || 1,
        src: image.src || '',
        srcSet: image.srcSet || '',
        base64: image.base64,
        sizes: image.sizes || '',
        srcSetWebp: image.srcSetWebp,
        srcWebp: image.srcWebp,
    };
    return (
        <div css={styles.overlay}>
            <div css={styles.modal}>
                <figure css={styles.container}>
                    <Img fluid={fluid} imgStyle={{ objectFit: 'contain' }} />
                </figure>
                <figcaption css={styles.caption}>{caption}</figcaption>
                <button type="button" css={styles.button} onClick={onClick}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default LightBoxModal;
