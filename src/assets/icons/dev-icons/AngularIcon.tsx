import * as React from "react"

const AngularIcon = () => (
	<svg viewBox="0 0 128 128">
		<defs>
			{/* IDs únicos para o Angular para evitar que o gradiente desapareça */}
			<linearGradient
				id="angular-gradient-a"
				x1="14.704"
				x2="110.985"
				y1="46.27"
				y2="92.024"
				gradientTransform="matrix(1 0 0 -1 0 130)"
				gradientUnits="userSpaceOnUse">
				<stop offset="0" stopColor="#e40035" />
				<stop offset=".24" stopColor="#f60a48" />
				<stop offset=".352" stopColor="#f20755" />
				<stop offset=".494" stopColor="#dc087d" />
				<stop offset=".745" stopColor="#9717e7" />
				<stop offset="1" stopColor="#6c00f5" />
			</linearGradient>

			<linearGradient
				id="angular-gradient-b"
				x1="28.733"
				x2="91.742"
				y1="117.071"
				y2="45.195"
				gradientTransform="matrix(1 0 0 -1 0 130)"
				gradientUnits="userSpaceOnUse">
				<stop offset="0" stopColor="#ff31d9" />
				<stop offset="1" stopColor="#ff5be1" stopOpacity="0" />
			</linearGradient>
		</defs>

		<path
			fill="url(#angular-gradient-a)"
			d="m124.5 21.3-4.4 68.6L78.3 0l46.2 21.3zm-29 88.7L64 128l-31.5-18 6.4-15.5h50.3l6.3 15.5zM64 34.1l16.5 40.2h-33L64 34.1zM7.9 89.9 3.5 21.3 49.7 0 7.9 89.9z"
		/>

		<path
			fill="url(#angular-gradient-b)"
			d="m124.5 21.3-4.4 68.6L78.3 0l46.2 21.3zm-29 88.7L64 128l-31.5-18 6.4-15.5h50.3l6.3 15.5zM64 34.1l16.5 40.2h-33L64 34.1zM7.9 89.9 3.5 21.3 49.7 0 7.9 89.9z"
		/>
	</svg>
)
export default AngularIcon
