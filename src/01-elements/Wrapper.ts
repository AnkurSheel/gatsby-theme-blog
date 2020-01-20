import { css } from '@emotion/core';
import { colors } from '../tokens';

const Wrapper = css({
    borderRadius: '20px',
    maxWidth: '770px',
    minHeight: '50vh',
    wordWrap: 'break-word',
    backgroundColor: `${colors.backgroundArticle}`,
    margin: '0px auto 2rem auto',
    padding: '1.5rem',
});

export default Wrapper;
