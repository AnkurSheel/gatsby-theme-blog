import React, { ReactNode } from 'react';
import { css } from '@emotion/core';
import { colors } from '../tokens';

const styles = {
    main: css({
        borderRadius: '20px',
        maxWidth: '770px',
        minHeight: '50vh',
        wordWrap: 'break-word',
        backgroundColor: `${colors.backgroundArticle}`,
        margin: '0px auto 2rem auto',
        padding: '1.5rem',
    }),
};

interface MainProps {
    children: ReactNode;
}

const Main = (props: MainProps) => {
    const { children } = props;
    return <main css={styles.main}>{children}</main>;
};

export default Main;
