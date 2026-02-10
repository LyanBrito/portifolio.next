"use client"

import NavBar from "@/components/NavBar/NavBar"
import s from "./HomePage.module.scss"
import StatusActive from "@/assets/icons/StatusActive";
import Link from "next/link";
import SkillsCard from "@/components/SkillsCard/Skills";
import ProjectsCard from "@/components/Projecs/ProjectsCard";
import { FigmaOriginal, GithubOriginal, GitOriginal, ReactOriginal } from "devicons-react";
import WhatsappIcon from "@/assets/icons/WhatsappIcon";
import MailIcon from "@/assets/icons/MailIcon";
import Footer from "@/components/Footer/Footer";
import SectionLink from "@/components/SectionLink/SectionLink";
import HomeSK from "@/components/ui/skeleton/HomeSK";
import {useEffect, useState} from "react";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import AboutMePage from "@/app/AboutMePage/page";

export default function Page() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return <HomeSK />
    return (
        <div className={s.homeContainer}>
            <NavBar page={"home"} />
            <main id="home" className={s.textWrapper}>
                <div className={s.titleWrapper}>
                    <h1>Lyan Brito</h1>
                    <h1>Web Developer</h1>
                </div>
                <div className={s.ATWcontainer}>
                    <StatusActive />
                    <span>Available To Work</span>
                </div>
                <p>Hi! I'm a developer passionate in UI/UX & Web Development. Throughout my journey, I gained experience
                    in several areas. Take a look on my works.</p>
            </main>
            <section id="about-me" className={s.sectionContainer}>
                <SectionLink isLink={true} isBlank={false} title="About me" description="Here some special skills that i learned in my trajectory" linkLabel="More" linkRef="/AboutMePage" />
                <div className={s.cardWrapper}>
                    <SkillsCard
                        link="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://react.dev/&ved=2ahUKEwicsbe4g_iQAxWEqpUCHbi9JngQFnoECBYQAQ&usg=AOvVaw1tEjYYiD7LQlxO53dgjTHV"
                        cardPage="home" type="react" title="React" icon={<ReactOriginal />} />
                    <SkillsCard
                        link="https://www.figma.com/pt-br/design/"
                        cardPage="home" type="figma" title="Design UI/UX" icon={<FigmaOriginal />} />
                    <SkillsCard
                        link="https://git-scm.com/book/ms/v2/Getting-Started-About-Version-Control"
                        cardPage="home" type="git" title="Git Versioning" icon={<GitOriginal />} />
                </div>
            </section>
            <section id="projects" className={s.sectionContainer}>
                <SectionLink isLink={true} title="Projects" description="As a student, I tracked my journey in development producting some projects" linkLabel="View More" linkRef="/ProjectsPage" isBlank={false} />
                <div className={s.cardWrapper}>
                    <ProjectsCard page="home" project={"luna"} />
                    <ProjectsCard page="home" project={"spring-project"} />
                </div>
            </section>
            <section id="contacts" className={s.sectionContainer}>
                <h2>Let's talk for something special!</h2>
                <div className={s.socialWrapepr}>
                    <Link className={s.socialLink} href="mailto:lyanbrito613@gmail.com"><MailIcon />lyanbrito613@gmail.com</Link>
                    <Link className={s.socialLink} href="tel:+5511986581730"><WhatsappIcon />(11) 9 8658-1730</Link>
                    <Link className={s.button}
                        href="/ContactsPage">
                        More Contact Info <ArrowIcon />
                    </Link>
                </div>
            </section>
            <Footer page="home" />
        </div>
    )
}