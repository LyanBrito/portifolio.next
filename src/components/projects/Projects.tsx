import { TitleWrapper } from "../small-componnets/TitleWrapper";
import "./projects.scss";
import Project from "@/components/small-componnets/Project";
import type { PageProps } from "@/types";
import Link from "next/link";
import { JVLogo, LandwindImg, LunaImg, RestfulImg, RRImg, SBImg } from "@/assets/images/export";

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
					projectDescription="A website made for gamers looking for new games our people to play."
					projectTitle="Luna Project"
					projectImg={LunaImg}
					projectAlt="luna figma community screenshot"
					type="pj1"
					ghLink="https://github.com/LyanBrito/study-api.backend.git"
					openLink="https://github.com/ALunaProject"
				/>
				<Project
					page={page}
					projectDescription="Simple SpringBoot project mande in SENAI course. Project made to understand RESTful API & CRUD"
					projectTitle="Spring Project"
					projectImg={SBImg}
					projectAlt="spring boot logo"
					type="pj1"
					ghLink="https://github.com/LyanBrito/spring-project.git"
					openLink="https://github.com/LyanBrito/spring-project.git"
				/>
				<Project
					page={page}
					projectDescription="Simple exercises made in SENAI course to understand OOP in Java Language."
					projectTitle="Java Course"
					projectImg={JVLogo}
					projectAlt="java logo"
					type="pj1"
					ghLink="https://github.com/LyanBrito/java-course2.git"
					openLink="https://github.com/LyanBrito/java-course2.git"
				/>
			</div>
		</section>
	);
}
