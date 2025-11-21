import NavBar from "@/components/NavBar/NavBar";
import s from "./AboutMe.module.scss";
import hs from "../HomePage/HomePage.module.scss"
import DownloadIcon from "@/assets/icons/DownloadIcon";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import SectionLink from "@/components/SectionLink/SectionLink";
import SkillsWrapper from "@/components/SkillsWrapper/SkilsWrapper";

export default function AboutMePage() {
    return (
        <div className={hs.homeContainer}>
            <NavBar page={"about-me"} links={["/", "/AboutMePage/AboutMe", "#projects", "contacts"]} />
            <section className={s.titleWrapper}>
                <h1>About me</h1>
                <p>As a student, I tracked my journey in development producting some projectsAs a student, I tracked my
                    journey in development producting some projects</p>
                <div className={s.downloadResume}>
                    <span>Resume</span>
                    <DownloadIcon />
                </div>
            </section>
            <section className={s.stacksWrapper}>
                <SectionLink isBlank={true} title="About Me" description="These are my best skills sei la texto grandinho aqui" linkLabel="View in github" linkRef="https://github.com/LyanBrito" />
            </section>
            <SkillsWrapper
                title="Frontend"
                isBlank={true}
                linkLabel="oi"
                linkRef="#"
                skills={["React", "NextJS", "TypeScript", "Turborepo"]}
                description=""
            />
            <SkillsWrapper
                title="Backend"
                isBlank={true}
                linkLabel="oi"
                linkRef="#"
                skills={["React", "Java"]}
                description=""
            />
            <SkillsWrapper
                title="Tools"
                isBlank={true}
                linkLabel="oi"
                linkRef="#"
                skills={["React", "Java"]}
                description=""
            />
            <SkillsWrapper
                title="Studiyng"
                isBlank={true}
                linkLabel="oi"
                linkRef="#"
                skills={["React", "Java"]}
                description=""
            />
        </div>
    )
}