import s from "./Skills.module.scss"
import hs from "@/app/HomePage/HomePage.module.scss"
import Link from "next/link"
import ArrowIcon from "@/assets/icons/ArrowIcon"

export type CardProps = {
	type: keyof typeof s
	title: string
	icon: any
	link: string
	cardPage: keyof typeof s
}

export default function SkillsCard({
	cardPage,
	type,
	title,
	icon,
	link,
}: CardProps) {
	return (
		<div className={`${s[type]} ${s.cardContainer} ${s[cardPage]}`}>
			<div className={s.cardText}>
				{icon}
				<p>{title}</p>
			</div>
			<Link className={hs.button} target="_blank" href={link}>
				See documentation <ArrowIcon />
			</Link>
		</div>
	)
}
