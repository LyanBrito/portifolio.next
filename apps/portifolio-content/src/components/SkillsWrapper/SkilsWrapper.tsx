import Link from "next/link"
import s from "./SkillsWrapper.module.scss"
import ArrowIcon from "@/assets/icons/ArrowIcon"
import { SectionLinkProps } from "../SectionLink/SectionLink"
import SkillsCard from "../SkillsCard/Skills"
import { skillsIcons } from "../Projecs/skillsMap"

type SkillsWrapperProps = SectionLinkProps & {
    skills: string[];
}

export default function SkillsWrapper({ title, isBlank, linkLabel, linkRef, skills }: SkillsWrapperProps) {

    return (
        <section className={s.textWrapper}>
            <div className={s.titleWrapper}>
                <h3>{title}</h3>
                <Link target={isBlank ? "_blank" : "_self"} href={linkRef}>{linkLabel}<ArrowIcon /></Link>
            </div>
            <div className={s.skillsWrapper}>
                {skills.map((skill, i) => {
                    const Icon = skillsIcons[skill];
                    if (!Icon) return null;

                    return (
                        <SkillsCard
                            key={i}
                            title={skill}
                            link="#"
                            type={skill.toLowerCase()}
                            icon={<Icon />}
                            cardPage="about"
                        />
                    );
                })}
            </div>
        </section>
    )
}