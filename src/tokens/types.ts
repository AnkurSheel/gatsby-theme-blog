import { CSSObject } from '@emotion/core';

// type ThemedStyle = (theme: Theme) => CSSObject;
export type Style = CSSObject;
export type StyleWithOptions<T> = (options: T) => Styles;

export type Styles = Record<string, Style>;
