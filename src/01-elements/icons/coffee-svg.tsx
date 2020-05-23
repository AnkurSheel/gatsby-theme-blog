/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function CoffeeSvg(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={24} height={36} viewBox="0 0 24 36" {...props}>
            <title>Group</title>
            <g fill="none" fillRule="evenodd">
                <path fill="#FF9100" d="M11.835 7.655l-8.74-.052 4.292 27.113h10.456l4.292-27.113z" />
                <path fill="#FD0" d="M11.835 7.655l-8.74-.052 4.292 27.113h8.272L19.95 7.603z" />
                <path fill="#FFF" d="M.599 7.603h22.55v-2.5H.6z" />
                <path stroke="#000" strokeWidth={1.17} d="M.599 7.603h22.55v-2.5H.6z" />
                <path fill="#FFF" d="M18.78 1.04H4.813l-1.64 3.75H20.419z" />
                <g strokeWidth={1.17}>
                    <path stroke="#050505" d="M18.78 1.04H4.813l-1.64 3.75H20.419z" />
                    <path stroke="#000" d="M11.835 7.655l-10.3-.052 4.292 27.113h12.016l4.292-27.113z" />
                </g>
                <path fill="#FFF" d="M22.447 15.26H1.146l1.922 10.783 8.728-.094 8.728.094z" />
                <path stroke="#000" strokeWidth={1.17} d="M22.447 15.26H1.146l1.922 10.783 8.728-.094 8.728.094z" />
            </g>
        </svg>
    );
}

export default CoffeeSvg;
