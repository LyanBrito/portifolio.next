import NavBar from "@/components/NavBar/NavBar"
import hs from "../HomePage/HomePage.module.scss"
import s from "./Projects.module.scss"
import SectionLink from "@/components/SectionLink/SectionLink"
import ProjectsCard from "@/components/Projecs/ProjectsCard"
import Footer from "@/components/Footer/Footer"

export default function ProjectPage() {
    return (
        <section className={hs.homeContainer}>
            <NavBar page={"projects"} links={["/", "/AboutMePage/AboutMe", "/Projects/ProjectsPage", "contacts"]} />
            <div id="home" className={s.projectsContainer}>
                <h1>Projects</h1>
                <p>Here are some of the main projects I've built while developing my skills. These projects represent my growth, creativity, and the technologies I’ve been mastering along my journey.
                </p>
            </div>
            {/* lg-project * 2 +  */}
            <section className={s.spContainer}>
                <SectionLink isLink={false} isBlank={true} title="Small Projects"
                    description="Some small experiments and study projects that helped me practice and understand new tools and techniques."
                    linkLabel="" linkRef="" />
                    <div className={s.projectsWrapper}>
                        <ProjectsCard project="rr-html" />
                        <ProjectsCard project="landwind"/>
                        <ProjectsCard project="java-course2"/>
                    </div>
            </section>
            <Footer page="other" />
        </section>
    )
}