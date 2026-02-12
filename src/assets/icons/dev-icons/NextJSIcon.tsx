import * as React from "react";
import type {SVGProps} from "react";

const NextJSIcon = (props: SVGProps<SVGSVGElement>) => (

    <svg viewBox="0 0 128 128" {...props}>
        <defs>
            <linearGradient
                id="next-gradient-a"
                x1="109" x2="144.5" y1="116.5" y2="160.5"
                gradientTransform="scale(.71111)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff"/>
                <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>

            <linearGradient
                id="next-gradient-b"
                x1="121" x2="120.799" y1="54" y2="106.875"
                gradientTransform="scale(.71111)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff"/>
                <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
        </defs>

        <circle cx="64" cy="64" r="64" fill="10000A"/>

        <path
            fill="url(#next-gradient-a)"
            d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
        />

        <path
            fill="url(#next-gradient-b)"
            d="M81.778 38.4h8.533v51.2h-8.533z"
        />
    </svg>

);
export default NextJSIcon;