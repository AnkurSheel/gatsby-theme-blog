import React, { ReactNode } from 'react';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    main: {
        borderRadius: '20px',
        maxWidth: '70ch',
        wordWrap: 'break-word',
        backgroundColor: `${theme.colors.backgroundArticle}`,
        margin: '0px auto 2rem auto',
        padding: '2ch',
    },
};

interface MainProps {
    children: ReactNode;
}

const Main = (props: MainProps) => {
    const { children } = props;
    return <main css={styles.main}>{children}</main>;
};

export default Main;
