import { TitleWrapper } from "../small-componnets/TitleWrapper";
import "./projects.scss";
import Project from "@/components/small-componnets/Project";
import { PageProps } from "@/types";
import Link from "next/link";
import { LandwindImg, RestfulImg, RRImg } from "@/assets/images/export";

export function Projects({ page }: PageProps) {
	return (
		<section id="projects" className="project-container">
			<div className="project-title">
				<TitleWrapper page={page} title="projects" index="/" />
				<Link href="/projectsPage" rel="noopener noreferrer">
					View more ~~{">"}
				</Link>
			</div>
			<div className="projects">
				<Project
					page={page}
					projectDescription="Project developed to understand the process of creating a RESTful API."
					projectTitle="Study API Backend"
					projectImg={RestfulImg}
					projectAlt="portifolio image"
					type="pj1"
					ghLink="https://github.com/LyanBrito/study-api.backend.git"
					openLink="https://github.com/LyanBrito/study-api.backend.git"
				/>
				<Project
					page={page}
					projectDescription="Page created to understand basic HTML coding."
					projectTitle="R&R"
					projectImg={RRImg}
					projectAlt="portifolio image"
					type="pj1"
					ghLink="https://github.com/LyanBrito/SENAI-rrFunilaria.HTML"
					openLink="https://rr-funilaria.vercel.app"
				/>
				<Project
					page={page}
					projectDescription="Page created with tailwind in SENAI course."
					projectTitle="Landwind"
					projectImg={LandwindImg}
					projectAlt="portifolio image"
					type="pj1"
					ghLink="https://github.com/LyanBrito/code-dojo-landwind.git"
					openLink="https://code-dojo-landwind-lac.vercel.app/"
				/>
			</div>
		</section>
	);
}
