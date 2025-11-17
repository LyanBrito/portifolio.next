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
import ProjectsCard from "@/components/Projecs/ProjectsCard";

export default function HomePage() {
    return (
        <div className={s.homeContainer}>
            <NavBar page="home" />
            <section className={s.textWrapper}>
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
            </section>
            <section className={s.sectionContainer}>
                <div className={s.secTextWrapper}>
                    <div className={s.secTitleWrapper}>
                        <h3>About me</h3>
                        <p>Here some special skills that i learned in my trajectory</p>
                    </div>
                    <Link href="#">More <ArrowIcon /></Link>
                </div>
                <div className={s.cardWrapper}>
                    <SkillsCard
                        link="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://react.dev/&ved=2ahUKEwicsbe4g_iQAxWEqpUCHbi9JngQFnoECBYQAQ&usg=AOvVaw1tEjYYiD7LQlxO53dgjTHV"
                        type="react" title="React" icon={<ReactIcon />} />
                    <SkillsCard
                        link="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://translate.google.com/translate%3Fu%3Dhttps://www.figma.com/%26hl%3Dpt%26sl%3Den%26tl%3Dpt%26client%3Dwa&ved=2ahUKEwiQ5ZfKg_iQAxVHpJUCHY3qI08QFnoECCYQAw&usg=AOvVaw0-Ta0uXMAObrHG2ij5pSgr"
                        type="figma" title="Design UI/UX" icon={<FigmaIcon />} />
                    <SkillsCard
                        link="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://spring.io/projects/spring-boot/&ved=2ahUKEwiS4d_Zg_iQAxVYqpUCHb8DNygQFnoECA4QAQ&usg=AOvVaw2pUMdt8wsd8iwcI6VR-oxY"
                        type="spring" title="Spring Boot" icon={<SpringIcon />} />
                </div>
            </section>
            <section className={s.sectionContainer}>
                <div className={s.secTextWrapper}>
                    <div className={s.secTitleWrapper}>
                        <h3>Projects</h3>
                        <p>As a student, I tracked my journey in development producting some projects</p>
                    </div>
                    <Link href="#">View More <ArrowIcon /></Link>
                </div>
                <ProjectsCard project={"luna"} />
                <ProjectsCard project={"spring-project"} />
                <ProjectsCard project={"rr-html"} />
            </section>
        </div>
    )
}