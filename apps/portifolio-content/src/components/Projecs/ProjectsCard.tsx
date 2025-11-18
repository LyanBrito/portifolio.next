import {skillsIcons} from "./skillsMap";
import s from "./ProductsCard.module.scss";
import {LunaImg, NotFound, SpringImg} from "@/assets/imgs/export";
import Image from "next/image";
import Link from "next/link";

type ProjectsProps = {
    project: string;
};

type ProjectData = {
    title: string;
    description: string;
    projectImage: any;
    skills: string[];
    projectLink: string;
};

export default function ProjectsCard({project}: ProjectsProps) {

    const getProjectData = (project: string): ProjectData => {
        switch (project) {
            case 'luna':
                return {
                    title: 'Luna',
                    description: 'Website + Figma Prototype',
                    projectImage: LunaImg,
                    skills: ['HTML', 'CSS', 'Spring', 'MySQL'],
                    projectLink: "https://github.com/ALunaProject",
                };
            case 'spring-project':
                return {
                    title: 'Spring',
                    description: 'Simple Spring backend Project',
                    projectImage: SpringImg,
                    skills: ['Java', 'Spring'],
                    projectLink: "https://github.com/LyanBrito/spring-project",
                }
            case 'java-course2':
                return {
                    title: 'Java Course 2',
                    description: 'Basic Java exercised fro POO practice',
                    projectImage: "",
                    projectLink: "https://github.com/LyanBrito/java-course2",
                    skills: ['Java']
                }
            case 'rr-html':
                return {
                    title: 'R&R Funilaria',
                    description: 'Landing page for HTML practice',
                    projectImage: "",
                    projectLink: "https://github.com/LyanBrito/SENAI-rrFunilaria.HTML",
                    skills: ['HTML', 'CSS', 'Javascript']
                }
            case 'shopping-react':
                return {
                    title: 'Fashion Website',
                    description: 'Webshop landing page made with create-react-app',
                    projectImage: "",
                    projectLink: "https://github.com/LyanBrito/shopping-website.react",
                    skills: ['React', 'styled-component', 'JavaScript']
                }
            case 'landwind':
                return {
                    title: 'Landwind LandinPage',
                    description: 'Page made with tailwind in Group',
                    projectImage: "",
                    projectLink: "https://github.com/LyanBrito/code-dojo-landwind",
                    skills: ['HTML', 'CSS', 'Tailwind']
                }

            default:
                return {
                    title: 'Projeto não encontrado',
                    description: 'Nenhuma informação disponível.',
                    projectImage: NotFound,
                    projectLink: '',
                    skills: [],
                };
        }
    };

    const data = getProjectData(project);

    return (
        <Link href={data.projectLink} className={`${s[project]} ${s.cardContainer}`}>
            <div className={s.imageBG}>
                <Image priority src={data.projectImage} alt={`${data.title}` + "-project-img"}/>
            </div>
            <div className={s.cardInfo}>
                <div className={s.cardTitleWrapper}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <div className={s.skillsWrapper}>
                    {data.skills.map((skill, i) => {
                        const Icon = skillsIcons[skill];
                        if (!Icon) return null;
                        return (
                            <Icon key={i}/>
                        );
                    })}
                </div>

            </div>
        </Link>
    )
}