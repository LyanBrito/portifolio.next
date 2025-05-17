import * as React from "react";
import type { SVGProps } from "react";
const SvgBranchIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 19 27"
		{...props}
	>
		<path
			stroke="#fff"
			strokeWidth={2.3}
			d="M4.167 25.056a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.333ZM4.19 7.278a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333ZM15.037 9.99a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"
		/>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2.3}
			d="M4.196 8.665V19.55c2.208-9.936 5.598-3.852 8.174-5.673s1.627-2.17 2.17-4.204"
		/>
	</svg>
);
export default SvgBranchIcon;
