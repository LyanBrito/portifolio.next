import Header from "@/components/Main/header/header";
import "../page.scss";
import "@/components/projects/projects.scss";
import { TitleWrapper } from "@/components/small-componnets/TitleWrapper";
import Project from "@/components/small-componnets/Project";
import Footer from "@/components/footer/Footer";
import {
	FashionImg,
	JavaImg,
	LandwindImg,
	RestfulImg,
	RRImg,
} from "@/assets/images/export";

export const metadata = {
	title: "Projects | Lyan Brito",
};

export default function Page({}) {
	return (
		<div className="page">
			<Header index="\projects&gt;" page="pg2" />
			<div className="all-projects">
				<TitleWrapper page="pg2" index="/" title="projects" />
				<div className="projects">
					<Project
						page="pg2"
						projectDescription="Project developed to understand the process of creating a RESTful API."
						projectTitle="Study API Backend"
						projectImg={RestfulImg}
						projectAlt="portifolio image"
						type="pj1"
						ghLink="https://github.com/LyanBrito/study-api.backend.git"
						openLink="https://github.com/LyanBrito/study-api.backend.git"
					/>
					<Project
						page="pg2"
						projectDescription="Page created to understand basic HTML coding."
						projectTitle="R&R"
						projectImg={RRImg}
						projectAlt="portifolio image"
						type="pj1"
						ghLink="https://github.com/LyanBrito/SENAI-rrFunilaria.HTML"
						openLink="https://rr-funilaria.vercel.app"
					/>
					<Project
						page="pg2"
						projectDescription="Page created with tailwind in SENAI course."
						projectTitle="Landwind"
						projectImg={LandwindImg}
						projectAlt="portifolio image"
						type="pj1"
						ghLink="https://github.com/LyanBrito/code-dojo-landwind.git"
						openLink="https://code-dojo-landwind-lac.vercel.app/"
					/>
					<Project
						page="pg2"
						projectDescription="React page created with styled-components"
						projectTitle="Fashion"
						projectImg={FashionImg}
						projectAlt="portifolio image"
						type="pj1"
						ghLink="https://github.com/LyanBrito/shopping-website.react.git"
						openLink="https://code-dojo-landwind-lac.vercel.app/"
					/>
					<Project
						page="pg2"
						projectDescription="Muitiple JAVA exercises"
						projectTitle="Java Course"
						projectImg={JavaImg}
						projectAlt="portifolio image"
						type="pj1"
						ghLink="https://github.com/LyanBrito/java-course.git"
						openLink="https://code-dojo-landwind-lac.vercel.app/"
					/>
				</div>
			</div>
			<div className="small-projects">
				<TitleWrapper page="pg2" index="/" title="small-projects" />
				<div className="projects">
					<Project
						page="pg2"
						projectDescription="LandingPage made with bootsrap"
						projectTitle="LandingPage Bootstrap"
						projectImg=""
						projectAlt="portifolio image"
						type="pj2"
						ghLink="https://github.com/LyanBrito/landingpage.bootstrap"
						openLink=" "
					/>
					<Project
						page="pg2"
						projectDescription="Page made with Astro & Less (with errors)"
						projectTitle="Astro & Less"
						projectImg=""
						projectAlt="portifolio image"
						type="pj2"
						ghLink="https://github.com/LyanBrito/study-astro.react"
						openLink=" "
					/>
					<Project
						page="pg2"
						projectDescription="Project made to study email.js"
						projectTitle="Email-JS"
						projectImg=""
						projectAlt="portifolio image"
						type="pj2"
						ghLink="https://github.com/LyanBrito/SENAI-emailJS.JS"
						openLink=" "
					/>
					<Project
						page="pg2"
						projectDescription="Trajectory in SENAI course to understand react"
						projectTitle="Learning React"
						projectImg=""
						projectAlt="portifolio image"
						type="pj2"
						ghLink="https://github.com/LyanBrito/learning-react"
						openLink=" "
					/>
					<Project
						page="pg2"
						projectDescription="My first HTML page"
						projectTitle="Brigadeiros Eril"
						projectImg=""
						projectAlt="portifolio image"
						type="pj2"
						ghLink="https://github.com/LyanBrito/SENAI-brigadeirosEril.HTML"
						openLink=" "
					/>
					<Project
						page="pg2"
						projectDescription="My old Portfolio page with HTML"
						projectTitle="Portfolio HTML"
						projectImg=""
						projectAlt="portifolio image"
						type="pj2"
						ghLink="https://github.com/LyanBrito/porTest.HTML"
						openLink=" "
					/>
				</div>
			</div>
			<Footer page="pg2" />
		</div>
	);
}
