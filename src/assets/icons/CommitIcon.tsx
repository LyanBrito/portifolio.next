import * as React from "react";
import type { SVGProps } from "react";
const SvgCommitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 25"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.3}
      d="M5.25 23.75v-6.875m0-15.625v7.5"
    />
    <path
      stroke="#fff"
      strokeWidth={2.3}
      d="M5.25 8.75a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z"
    />
  </svg>
);
export default SvgCommitIcon;
