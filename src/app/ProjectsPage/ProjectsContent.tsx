import hs from "@/app/HomePage/HomePage.module.scss"
import NavBar from "@/components/NavBar/NavBar"
import s from "@/app/ProjectsPage/Projects.module.scss"
import PProjectsCard from "@/components/Projecs/PrincipalProjects"
import SectionLink from "@/components/SectionLink/SectionLink"
import ProjectsCard from "@/components/Projecs/ProjectsCard"
import Footer from "@/components/Footer/Footer"

export default function ProjectsContent() {
	return (
		<section className={hs.homeContainer}>
			<NavBar page={"projects"} />
			<div id="home" className={s.projectsContainer}>
				<h1>Projects</h1>
				<p>
					Here are some of the main projects I've built while
					developing my skills. These projects represent my growth,
					creativity, and the technologies I’ve been mastering along
					my journey.
				</p>
			</div>
			<div className={s.ppWrapper}>
				<PProjectsCard project="luna" />
				<PProjectsCard project="ecommerce" />
			</div>
			<section className={s.spContainer}>
				<SectionLink
					isLink={false}
					isBlank={true}
					title="Small Projects"
					description="Some small experiments and study projects that helped me practice and understand new tools and techniques."
					linkLabel=""
					linkRef=""
				/>
				<div className={s.projectsWrapper}>
					<ProjectsCard page="projects" project="rr-html" />
					<ProjectsCard page="projects" project="todolist-back" />
					<ProjectsCard page="projects" project="shopping-react" />
					<ProjectsCard page="projects" project="microfront-study" />
					<ProjectsCard page="projects" project="campus-datacenter" />
					<ProjectsCard page="projects" project="java-course2" />
					<ProjectsCard page="projects" project="landwind" />
					<ProjectsCard page="projects" project="express-study" />
					<ProjectsCard page="projects" project="spring-project" />
					<ProjectsCard page="projects" project="learning-react"/>
				</div>
			</section>
			<Footer page="other" />
		</section>
	)
}
