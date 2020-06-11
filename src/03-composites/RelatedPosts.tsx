import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { GetRelatedPostsQuery, Post } from '../graphqlTypes';
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
        fontSize: '1.25rem',
    },
};

type Dictionary<T> = { [key: string]: T };
type IdentityMap = Dictionary<{ article: Pick<Post, 'tags' | 'title' | 'path' | 'date'>; points: number }>;

type RelatedPostsComponentProps = {
    date: string;
    tags: string[];
    slug: string;
};

const RelatedPosts = (props: RelatedPostsComponentProps) => {
    const { slug, tags } = props;
    const data: GetRelatedPostsQuery = useStaticQuery(
        graphql`
            query GetRelatedPosts {
                allPost(sort: { fields: date, order: DESC }, filter: { draft: { eq: false } }) {
                    nodes {
                        title
                        path
                        date
                        tags
                    }
                }
            }
        `
    );
    const padLeft0 = (n: number) => n.toString().padStart(2, '0');
    const formatDate = (d: Date) => `${d.getFullYear()}-${padLeft0(d.getMonth() + 1)}-${padLeft0(d.getDate())}`;
    const todaysDate = formatDate(new Date());

    const articles = data.allPost.nodes.filter((article) => article.path !== slug && article.date <= todaysDate);

    const identityMap: IdentityMap = {};

    articles.forEach((article) => {
        if (!Object.prototype.hasOwnProperty.call(identityMap, article.path)) {
            identityMap[article.path] = {
                article,
                points: 0,
            };
        }

        article.tags.forEach((tag) => {
            if (tags.indexOf(tag) > -1) {
                identityMap[article.path].points += 1;
            }
        });
    });

    const arrayIdentityMap = Object.keys(identityMap)
        .map((s) => identityMap[s])
        .sort((a, b) => {
            if (a && b) {
                return a.points < b.points ? 1 : -1;
            }
            return 0;
        })
        .splice(0, 4)
        .filter((s) => s.points > 0);

    if (arrayIdentityMap.length === 0) {
        return <></>;
    }
    return (
        <section css={styles.container}>
            <h1 css={styles.header}>More like this</h1>
            <ul css={styles.list}>
                {arrayIdentityMap.map((identity) => {
                    const { title, path } = identity.article;
                    return (
                        <li key={title} css={styles.listItem}>
                            <Link css={styles.link} to={path}>
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
