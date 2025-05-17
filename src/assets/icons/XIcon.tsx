import * as React from "react";
import type { SVGProps } from "react";
const SvgXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="m9 9 7 7m0-7-7 7m3.703 5.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
  </svg>
);
export default SvgXIcon;
