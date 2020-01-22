import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import { GetRelatedPostsQuery } from '../graphqlTypes';
import { Styles, theme } from '../tokens';

const styles: Styles = {
    container: {
        background: theme.colors.card.background,
        padding: '1rem',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    header: {
        paddingBottom: '0.5rem',
        color: theme.colors.card.title,
        alignSelf: 'center',
        fontSize: '2.5rem',
    },
    list: {
        margin: 0,
        listStyle: 'none',
    },
    listItem: {
        padding: '0.25em',
    },
    link: {
        padding: '0 0.25em',
        textDecoration: 'none',
        color: theme.colors.card.link,
        ':hover': {
            backgroundColor: theme.colors.card.link,
            color: theme.colors.card.background,
        },
        fontSize: '1.5rem',
        lineHeight: '2rem',
    },
};

type Dictionary<T> = { [key: string]: T };
type IdentityMap = Dictionary<{ article: { title: string; slug: string }; points: number }>;

type RelatedPostsComponentProps = {
    date: string;
    tags: string[];
    slug: string;
};

const RelatedPosts = (props: RelatedPostsComponentProps) => {
    const { slug, tags } = props;
    const {
        allMdx: { edges },
    }: GetRelatedPostsQuery = useStaticQuery(
        graphql`
            query GetRelatedPosts {
                allMdx(
                    sort: { order: DESC, fields: frontmatter___date }
                    filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { regex: "/content/posts/" } }
                    limit: 1000
                ) {
                    edges {
                        node {
                            frontmatter {
                                slug
                                title
                                date
                                tags
                            }
                        }
                    }
                }
            }
        `
    );
    const articles = edges
        .map(edge => {
            const title = oc(edge).node.frontmatter.title('');
            const t = oc(edge).node.frontmatter.tags([]) as string[];
            const date = oc(edge).node.frontmatter.date('');
            const s = oc(edge).node.frontmatter.slug('');
            return { title, tags: t, slug: s, date };
        })
        .filter(article => article.slug !== slug);

    const identityMap: IdentityMap = {};

    articles.forEach(article => {
        if (!Object.prototype.hasOwnProperty.call(identityMap, article.slug)) {
            identityMap[article.slug] = {
                article,
                points: 0,
            };
        }

        article.tags.forEach(tag => {
            if (tags.indexOf(tag) > -1) {
                identityMap[article.slug].points += 1;
            }
        });
    });

    const arrayIdentityMap = Object.keys(identityMap)
        .map(s => identityMap[s])
        .sort((a, b) => {
            if (a && b) {
                return a.points <= b.points ? 1 : -1;
            }
            return 0;
        })
        .splice(0, 4)
        .filter(s => s.points > 0);

    return (
        <section css={styles.container}>
            <h1 css={styles.header}>More like this</h1>
            <ul css={styles.list}>
                {arrayIdentityMap.map(identity => {
                    const { title, slug: path } = identity.article;
                    return (
                        <li key={title} css={styles.listItem}>
                            <Link css={styles.link} to={`/blog/${path}`}>
                                {title}&rarr;
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default RelatedPosts;
