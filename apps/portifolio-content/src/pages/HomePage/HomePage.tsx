import NavBar from "@/components/NavBar/NavBar"
import s from "./HomePage.module.scss"
import StatusActive from "@/assets/icons/StatusActive";
import Link from "next/link";
import SkillsCard from "@/components/SkillsCard/Skills";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import ProjectsCard from "@/components/Projecs/ProjectsCard";
import {FigmaOriginal, GithubOriginal, GitOriginal, ReactOriginal} from "devicons-react";

export default function HomePage() {
    return (
        <div className={s.homeContainer}>
            <NavBar page="home"/>
            <section className={s.textWrapper}>
                <div className={s.titleWrapper}>
                    <h1>Lyan Brito</h1>
                    <h1>Web Developer</h1>
                </div>
                <div className={s.ATWcontainer}>
                    <StatusActive/>
                    <span>Available To Work</span>
                </div>
                <p>Hi! I'm a developer passionate in UI/UX & Web Development. Throughout my journey, I gained experience
                    in several areas. Take a look on my works.</p>
            </section>
            <section className={s.sectionContainer}>
                <div className={s.secTextWrapper}>
                    <div className={s.secTitleWrapper}>
                        <h3>About me</h3>
                        <p>Here some special skills that i learned in my trajectory</p>
                    </div>
                    <Link href="#">More <ArrowIcon/></Link>
                </div>
                <div className={s.cardWrapper}>
                    <SkillsCard
                        link="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://react.dev/&ved=2ahUKEwicsbe4g_iQAxWEqpUCHbi9JngQFnoECBYQAQ&usg=AOvVaw1tEjYYiD7LQlxO53dgjTHV"
                        type="react" title="React" icon={<ReactOriginal/>}/>
                    <SkillsCard
                        link="https://www.figma.com/pt-br/design/"
                        type="figma" title="Design UI/UX" icon={<FigmaOriginal/>}/>
                    <SkillsCard
                        link="https://git-scm.com/book/ms/v2/Getting-Started-About-Version-Control"
                        type="git" title="Git Versioning" icon={<GitOriginal/>}/>
                </div>
            </section>
            <section className={s.sectionContainer}>
                <div className={s.secTextWrapper}>
                    <div className={s.secTitleWrapper}>
                        <h3>Projects</h3>
                        <p>As a student, I tracked my journey in development producting some projects</p>
                    </div>
                    <Link href="#">View More <ArrowIcon/></Link>
                </div>
                <div className={s.cardWrapper}>
                    <ProjectsCard project={"luna"}/>
                    <ProjectsCard project={"spring-project"}/>
                </div>
            </section>
        </div>
    )
}