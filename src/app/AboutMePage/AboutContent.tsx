import hs from "@/app/HomePage/HomePage.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import s from "@/app/AboutMePage/AboutMe.module.scss";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import SectionLink from "@/components/SectionLink/SectionLink";
import SkillsWrapper from "@/components/SkillsWrapper/SkilsWrapper";
import Footer from "@/components/Footer/Footer";

export default function AboutContent() {
    return (
        <div className={hs.homeContainer}>
            <NavBar page={"about-me"}/>
            <section id="home" className={s.aboutContainer}>
                <div className={s.titleWrapper}>
                    <h1>About me</h1>
                    <a href="../../assets/docs/Resume.pdf" download className={`${hs.ATWcontainer} ${s.dlResume}`}>
                        <DownloadIcon/>
                        <span>Resume</span>
                    </a>
                </div>
                <p>I'm a development student passionate about technology. I track my growth through real projects,
                    always aiming to learn, create, and improve.
                </p>
            </section>
            <section className={s.stacksWrapper}>
                <SectionLink isBlank={true} title="My Stacks"
                             description="These are the technologies I use the most in my projects and represent my current skill set as a developer."
                             linkLabel="View in github" linkRef="https://github.com/LyanBrito"
                             isLink={true}/>
            </section>
            <SkillsWrapper
                title="Frontend"
                isBlank={true}
                isLink={false}
                linkLabel=""
                linkRef=""
                skills={["HTML", "CSS", "SCSS", "Bootstrap", "TailwindCSS", "styled-components", "less.JS", "React", "NextJS", "JavaScript", "TypeScript"]}
                description=""
            />
            <SkillsWrapper
                title="Backend"
                isBlank={true}
                isLink={false}
                linkLabel=""
                linkRef=""
                skills={["Java", "Spring"]}
                description=""
            />
            <SkillsWrapper
                title="Tools"
                isBlank={true}
                isLink={false}
                linkLabel=""
                linkRef=""
                skills={["Postman", "Figma", "Git", "Vercel", "Github", "Biome", "ReactNavigation"]}
                description=""
            />
            <SkillsWrapper
                title="Studiyng"
                isBlank={true}
                isLink={false}
                linkLabel=""
                linkRef=""
                skills={["NodeJS", "Maven", "ReactNative", "module-federation", "Turborepo", "MySQL", "Vite", "Angular"]}
                description=""
            />
            <Footer page="other"/>
        </div>
    )
}