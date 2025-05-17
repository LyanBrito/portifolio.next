import "./hero.scss";
import { PageProps } from "@/types";
import Image from "next/image";
import { BpIcon } from "@/assets/icons/export";
import { PlaceholderImage } from "@/assets/images/export";

export default function Hero({ page }: PageProps) {
	return (
		<section id="home" className="home-container">
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
				<Image
					className="hero-image"
					src={PlaceholderImage}
					alt="Placeholder Image"
				/>
				<div className="working-on">
					<BpIcon />
					<p>
						Currently working on <b>Buspoint.mobile</b>
					</p>
				</div>
			</div>
		</section>
	);
}
