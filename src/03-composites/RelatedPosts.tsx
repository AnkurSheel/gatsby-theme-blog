import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { oc } from 'ts-optchain';
import { css } from '@emotion/core';
import { GetRelatedPostsQuery } from '../graphqlTypes';
import { colors } from '../tokens';

export const styles = {
    header: css({
        paddingBottom: '0.5rem',
    }),
    list: css({
        padding: '0.5rem 1.5rem',
        margin: 0,
        width: '100%',
        listStyle: 'none',
    }),
    listItem: css({
        padding: '0.5em 0',
        borderBottom: `1px solid ${colors.primary}`,
        width: 'max-content',
    }),
    link: css({
        textDecoration: 'none',
        border: 'none',
        ':visited': {
            color: '#0000EE',
        },
        ':hover': {
            backgroundColor: '#0000EE',
            color: 'white',
        },
        fontSize: '1.5rem',
        lineHeight: '2rem',
        padding: '0 0.5rem',
    }),
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
        .splice(0, 4);

    return (
        <>
            <h1 css={styles.header}>More like this</h1>
            <ul css={styles.list}>
                {arrayIdentityMap.map(identity => {
                    const { title, slug: path } = identity.article;
                    return (
                        <li key={title} css={styles.listItem}>
                            <Link css={styles.link} to={`/blog/${path}`}>
                                {title} &rarr;
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default RelatedPosts;
