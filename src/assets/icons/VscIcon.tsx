import * as React from "react";
import type { SVGProps } from "react";
const SvgVscIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 25"
    {...props}
  >
    <path
      stroke="#1A1F30"
      strokeLinecap="round"
      strokeWidth={2.3}
      d="m2 9 7.5 7L2 23M15.5 16 8 9l7.5-7"
    />
  </svg>
);
export default SvgVscIcon;
