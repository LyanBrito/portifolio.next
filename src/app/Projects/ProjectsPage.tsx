import NavBar from "@/components/NavBar/NavBar"
import hs from "../HomePage/HomePage.module.scss"
import s from "./Projects.module.scss"
import SectionLink from "@/components/SectionLink/SectionLink"
import ProjectsCard from "@/components/Projecs/ProjectsCard"
import Footer from "@/components/Footer/Footer"
import PProjectsCard from "@/components/Projecs/PrincipalProjects"
import ProjectsPageSK from "@/components/ui/skeleton/ProjectsPageSK";
import {useEffect, useState} from "react";

export default function ProjectPage() {
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 800)
            return () => clearTimeout(timer)
        }, [])

        if (loading) return <ProjectsPageSK />

    return (
        <section className={hs.homeContainer}>
            <NavBar page={"projects"} links={["/", "/AboutMePage/AboutMe", "/Projects/ProjectsPage", "/ContactsPage/Contacts"]} />
            <div id="home" className={s.projectsContainer}>
                <h1>Projects</h1>
                <p>Here are some of the main projects I've built while developing my skills. These projects represent my growth, creativity, and the technologies I’ve been mastering along my journey.
                </p>
            </div>
            <div className={s.ppWrapper}>
                <PProjectsCard project="luna" />
                <PProjectsCard project="spring-project" />
            </div>
            <section className={s.spContainer}>
                <SectionLink isLink={false} isBlank={true} title="Small Projects"
                    description="Some small experiments and study projects that helped me practice and understand new tools and techniques."
                    linkLabel="" linkRef="" />
                <div className={s.projectsWrapper}>
                    <ProjectsCard page="projects" project="rr-html" />
                    <ProjectsCard page="projects" project="landwind" />
                    <ProjectsCard page="projects" project="shopping-react" />
                    <ProjectsCard page="projects" project="microfront-study" />
                    <ProjectsCard page="projects" project="simple-api.node" />
                    <ProjectsCard page="projects" project="" />
                </div>
            </section>
            <Footer page="other" />
        </section>
    )
}