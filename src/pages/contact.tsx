import React from 'react';
import { Helmet } from 'react-helmet';
import Main from '../02-components/Main';
import Hero from '../03-composites/Hero';
import Layout from '../04-layouts/default-layout/layout';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    form: {
        display: 'grid',
        gridTemplateColumns: '[labels] auto [controls] 1fr',
        gridAutoFlow: 'row',
        gridGap: '0.8em',
        padding: '1.2em',
        alignItems: 'center',
    },
    label: {
        gridColumn: 'labels',
        gridRow: 'auto',
        color: theme.colors.paragraph,
    },
    input: {
        backgroundColor: theme.colors.card.background,
        color: theme.colors.card.paragraph,
        gridColumn: 'controls',
        gridRow: 'auto',
        border: 'none',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '1em',
    },
    button: {
        padding: '1rem 2rem',
        cursor: 'pointer',
        color: theme.colors.card.background,
        backgroundColor: theme.colors.card.link,
    },
};

const Contact = () => {
    return (
        <Layout>
            <Helmet title="Contact Me" />
            <Hero title="Contact Me" />
            <Main>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div css={styles.form}>
                        <label htmlFor="name" css={styles.label}>
                            Name
                        </label>
                        <input type="text" name="name" id="name" required css={styles.input} />
                        <label htmlFor="email" css={styles.label}>
                            Email
                        </label>
                        <input type="email" name="email" id="email" required css={styles.input} />
                        <label htmlFor="subject" css={styles.label}>
                            Subject
                        </label>
                        <input type="text" name="subject" id="subject" required css={styles.input} />
                        <label htmlFor="message" css={styles.label}>
                            Message
                        </label>
                        <textarea name="message" id="message" rows={5} required css={styles.input} />
                    </div>
                    <div css={styles.buttonContainer}>
                        <button type="submit" css={styles.button}>
                            Send
                        </button>
                        <input type="reset" value="Clear" css={styles.button} />
                    </div>
                </form>
            </Main>
        </Layout>
    );
};

export default Contact;
