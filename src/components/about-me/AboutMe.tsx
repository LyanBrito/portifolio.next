import "./aboutMe.scss";
import { Card } from "@/components/small-componnets/Card";
import { TitleWrapper } from "@/components/small-componnets/TitleWrapper";
import { PageProps } from "@/types";

export function AboutMe({ page }: PageProps) {
	return (
		<section id="about-me" className="about-container">
			<div className="me-container">
				<TitleWrapper page={page} index="/" title="about-me" />
				<p>
					Apprentice in web design and front-end development, with experience in
					modern frameworks and agile methodologies. I acquired knowledge
					through personal studies and courses at SENAI.
					<br />
					<br />I am currently on a Technical Course in Systems Development at
					SENAI Suíço-Brasileiro, seeking to improve my skills and expand my
					performance in the technology sector.
				</p>
			</div>
			<div className="skills">
				<TitleWrapper page={page} index="#" title="skills" />
				<div className="card-wrapper">
					<Card title="Frameworks" content="Tailwind.CSS React SCSS Astro" />
					<Card title="Others" content="Node.js Less.js React.Native" />
					<Card title="Languages" content="TypeScript JavaScript Java HTML" />
					<Card title="Tools" content="Figma VSCode Git" />
				</div>
			</div>
		</section>
	);
}
