import React from 'react';
import { Styles } from '../../tokens';

const styles: Styles = {
    wrapper: {
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%',
        margin: '1rem 0',
    },
    iframe: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        border: 0,
    },
};

type VideoProps = {
    src: string;
    title: string;
};

export const Video = (props: VideoProps) => {
    const { src, title } = props;

    return (
      <div css={styles.wrapper}>
        <iframe css={styles.iframe} src={src} title={title} allowFullScreen />
      </div>
    );
};

export default Video;
