import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
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
			d="M5.5 8v5m0-8v.01m4 7.99V8m4 5v-3a2 2 0 1 0-4 0m-8-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z"
		/>
	</svg>
);
export default SvgLinkedinIcon;
