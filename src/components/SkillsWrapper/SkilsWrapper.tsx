import s from "./SkillsWrapper.module.scss"
import { SectionLinkProps } from "../SectionLink/SectionLink"
import SkillsCard from "../SkillsCard/Skills"
import { skillsIcons } from "../../constants/skills"
import { skillsDocs } from "@/constants/docs"

type SkillsWrapperProps = SectionLinkProps & {
	skills: string[]
}

export default function SkillsWrapper({ title, skills }: SkillsWrapperProps) {
	return (
		<section className={s.textWrapper}>
			<div className={s.titleWrapper}>
				<h4>{title}</h4>
			</div>
			<div className={s.skillsWrapper}>
				{skills.map((skill, i) => {
					const Icon = skillsIcons[skill]
					if (!Icon) return null
					return (
						<SkillsCard
							key={i}
							title={skill}
							type={skill.toLowerCase()}
							icon={<Icon />}
							cardPage="about"
							link={skillsDocs[skill]}
						/>
					)
				})}
			</div>
		</section>
	)
}
