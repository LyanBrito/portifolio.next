import "./hero.scss";
import {PageProps} from "@/types";
import Image from "next/image";
import {BpIcon} from "@/assets/icons/export";

export default function Hero({ page }: PageProps) {
	return (
		<div className="home-container">
			<div className="hero-title">
				<h1>
					Hello World! I’m <span className={page}>Lyan Brito.</span>
				</h1>
				<p>
					I’m a <span className={page}>web designer</span> and{" "}
					<span className={page}>front-end developer.</span>
				</p>
			</div>
			<div className="main-project">
				<Image src="https://picsum.photos/529/395" height={395} width={529} alt="Placeholder Image" />
				<div className="working-on">
					<BpIcon />
					<p>
						Currently working on <b>Buspoint.mobile</b>
					</p>
				</div>
			</div>
		</div>
	);
}
