/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const RssSvg = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 24 24" width={24} height={24} {...props}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 00-8-8v-3zm0 7a4 4 0 014 4H3v-4z" />
        </svg>
    );
};

export default RssSvg;
