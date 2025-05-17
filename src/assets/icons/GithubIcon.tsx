import * as React from "react";
import type { SVGProps } from "react";
const SvgGithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#BA7595"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M7.5 17c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2S16 .8 13.6 2.4a12.3 12.3 0 0 0-6.2 0C5 .8 3.9 1.1 3.9 1.1a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V19"
    />
  </svg>
);
export default SvgGithubIcon;
