// refatorar no Webstorm:
// - renomaer essa pasta pata Cards
// - mover ProjectsCard e PP pra cá
// - unificar os estilos em um unico arquivo (se melhorar performace)

import InstagramIcon from "@/assets/icons/InstagramIcon"
import { NotFound } from "@/assets/imgs/export"
import Link from "next/link"
import s from "./Social.module.scss"
import LinkedinIcon from "@/assets/icons/dev-icons/LinkedinIcon";
import GithubIcon from "@/assets/icons/dev-icons/GithubIcon";

type SocialProps = {
	contact: string
}

type SocialData = {
	title: string
	icon: any
	socialLinkHref: string
	socialLink: string
}

export default function SocialCard({ contact }: SocialProps) {
	const getSocialData = (contact: string): SocialData => {
		switch (contact) {
			case "linkedin":
				return {
					title: "Linkedin",
					icon: <LinkedinIcon />,
					socialLink: "in/lyanbrito",
					socialLinkHref: "https://www.linkedin.com/in/lyanbrito/",
				}
			case "insta":
				return {
					title: "Instagram",
					icon: <InstagramIcon />,
					socialLink: "@_lyanbrito_",
					socialLinkHref: "https://www.instagram.com/_lyanbrito_/",
				}
			case "github":
				return {
					title: "Linkedin",
					icon: <GithubIcon />,
					socialLink: "lyanbrito",
					socialLinkHref: "https://github.com/LyanBrito",
				}
			default:
				return {
					title: "Contact not found",
					icon: NotFound,
					socialLink: "not_found",
					socialLinkHref: "#",
				}
		}
	}

	const data = getSocialData(contact)

	return (
		<div className={`${s[contact]} ${s.cardContainer}`}>
			<div className={s.cardText}>
				{data.icon}
				<p>{data.title}</p>
			</div>
			<Link href={data.socialLinkHref}>{data.socialLink}</Link>
		</div>
	)
}
