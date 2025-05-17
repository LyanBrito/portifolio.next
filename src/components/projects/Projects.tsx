import { TitleWrapper } from "../small-componnets/TitleWrapper";
import "./projects.scss";
import Project from "@/components/small-componnets/Project";
import {PageProps} from "@/types";

export function Projects({ page }: PageProps) {
	return (
		<section className="project-container">
			<div className="project-title">
				<TitleWrapper page={page} title="projects" index="/" />
				<a href="https://example.com" target="_blank" rel="noopener noreferrer">
					View more ~~{">"}
				</a>
			</div>
			<div className="projects">
				<Project
					page={page}
					projectDescription="Personal Portifolio"
					projectTitle="Portifolio"
					projectImg="https://picsum.photos/305/208"
					projectAlt="portifolio image"
				/>
				<Project
					page={page}
					projectDescription="Personal Portifolio"
					projectTitle="Portifolio"
					projectImg="https://picsum.photos/305/208"
					projectAlt="portifolio image"
				/>
				<Project
					page={page}
					projectDescription="Personal Portifolio"
					projectTitle="Portifolio"
					projectImg="https://picsum.photos/305/208"
					projectAlt="portifolio image"
				/>
			</div>
		</section>
	);
}
