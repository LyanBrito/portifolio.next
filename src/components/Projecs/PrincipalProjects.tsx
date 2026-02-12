import Link from "next/link"
import s from "./ProductsCard.module.scss"
import { skillsIcons } from "@/constants/skills"
import SafariIcon from "@/assets/icons/dev-icons/SafariIcon";
import GithubIcon from "@/assets/icons/dev-icons/GithubIcon";

type ProjectsProps = {
	project: string
}

type ProjectData = {
	title: string
	description: string
	skills: string[]
	projectLink: string
	githubLink: string
}

export default function PProjectsCard({ project }: ProjectsProps) {
	const getProjectData = (project: string): ProjectData => {
		switch (project) {
			// quando for colocar outra coisa importante, só cria um novo case 😝
			case "luna":
				return {
					title: "Luna",
					description:
						"Website made for available gamers community, perfect for those who want to know new people",
					skills: ["HTML", "CSS", "Spring", "MySQL"],
					githubLink: "https://github.com/ALunaProject",
					projectLink:
						"https://alunaproject.github.io/luna-project.frontend/",
				}
			case "spring-project":
				// trocar esse de spring por algo melhor, mais completo
				return {
					title: "Spring",
					description:
						"This project showcases a simple CRUD application built using the Spring framework.",
					skills: ["Java", "Spring", "Maven"],
					githubLink: "https://github.com/LyanBrito/spring-project",
					projectLink: "https://github.com/LyanBrito/spring-project",
				}
			default:
				return {
					title: "Projeto não encontrado",
					description: "Nenhuma informação disponível.",
					projectLink: "",
					githubLink: "",
					skills: [],
				}
		}
	}

	const data = getProjectData(project)

	return (
		<div className={`${s.ppCardContainer} ${s[project]}`}>
			<div className={s.ppCardInfo}>
				<div className={s.ppCardText}>
					<h4>{data.title}</h4>
					<p>{data.description}</p>
				</div>
			</div>
			<div className={s.flipCard}>
				<div className={s.flipCardInner}>
					<div className={s.flipCardFront}>
						<p>Ferramentas utilizadas:</p>
						<div className={s.skillsWrapper}>
							{data.skills.map((skill, i) => {
								const Icon = skillsIcons[skill]
								if (!Icon) return null
								return <Icon key={i} />
							})}
						</div>
					</div>
					<div className={s.flipCardBack}>
						<p>Open in</p>
						<div className={s.ppLinksWrapper}>
							<Link
								target="_blank"
								className={s.ppLink}
								href={data.projectLink}
							>
								<SafariIcon /> Website
							</Link>
							<Link
								target="_blank"
								className={s.ppLink}
								href={data.githubLink}
							>
								<GithubIcon /> Github
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		// <Link href={data.projectLink} className={`${s[page]} ${s[project]} ${s.cardContainer}`}>
		//     <div className={s.imageBG}>
		//         <Image src={data.projectImage} alt={`${data.title}` + "-project-img"} />
		//     </div>
		//     <div className={s.cardInfo}>
		//         <div className={s.cardTitleWrapper}>
		//             <h3>{data.title}</h3>
		//             <p>{data.description}</p>
		//         </div>
		//         <div className={s.skillsWrapper}>
		//             {data.skills.map((skill, i) => {
		//                 const Icon = skillsIcons[skill];
		//                 if (!Icon) return null;
		//                 return (
		//                     <Icon key={i} />
		//                 );
		//             })}
		//         </div>

		//     </div>
		// </Link>
	)
}
