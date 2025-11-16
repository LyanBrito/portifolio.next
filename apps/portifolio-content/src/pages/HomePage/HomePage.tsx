import NavBar from "@/components/NavBar/NavBar"
import s from "./HomePage.module.scss"
import StatusActive from "@/assets/icons/StatusActive";
import Link from "next/link";
import SkillsCard from "@/components/SkillsCard/Skills";
import ReactIcon from "@/assets/icons/ReactIcon";
import TSIcon from "@/assets/icons/TSIcon";
import SpringIcon from "@/assets/icons/SpringIcon";
import FigmaIcon from "@/assets/icons/FigmaIcon";
import ArrowIcon from "@/assets/icons/ArrowIcon";

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
            <section className={s.aboutMeContainer}>
                <div className={s.aboutMeWrapper}>
                    <div className={s.aboutMeTitle}>
                        <h2>About me</h2>
                        <p>Here some special skills that i learned in my trajectory</p>
                    </div>
                    <Link href="#">More <ArrowIcon /></Link>
                </div>
                <div className={s.cardWrapper}>
                    <SkillsCard type={"react"} title={"React"} icon={<ReactIcon />}/>
                    <SkillsCard type={"figma"} title={"Design UI/UX"} icon={<FigmaIcon />}/>
                    <SkillsCard type={"spring"} title={"Spring Boot"} icon={<SpringIcon />}/>
                </div>
            </section>
        </div>
    )
}