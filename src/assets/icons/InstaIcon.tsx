import * as React from "react";
import type { SVGProps } from "react";
const SvgInstaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 18"
    {...props}
  >
    <path
      stroke="#BA7595"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M14 4.5v.01M1.5 5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4zm5 4a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
  </svg>
);
export default SvgInstaIcon;
