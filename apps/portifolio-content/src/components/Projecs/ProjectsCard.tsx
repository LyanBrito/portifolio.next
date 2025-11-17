import { skillsIcons } from "./skillsMap";
import s from "./ProductsCard.module.scss";

type ProjectsProps = {
    project: string;
};

type ProjectData = {
    title: string;
    description: string;
    projectImage: string;
    skills: string[];
};

export default function ProjectsCard({ project }: ProjectsProps) {

    const getProjectData = (project: string): ProjectData => {
        switch (project) {
            case 'luna':
                return {
                    title: 'Luna',
                    description: 'Website + Figma Prototype',
                    projectImage: "./../../assets/imgs/luna-project.png",
                    // arrumar caminho da imagem
                    skills: ['HTML', 'CSS', 'Spring'],
                };
            case 'spring-project':
                return {
                    title: 'Spring',
                    description: 'Simple JPA repository',
                    projectImage: "",
                    skills: ['Java', 'Spring'],
                }
            case 'java-course2':
                return {
                    title: 'Java Course 2',
                    description: 'Basic Java exercised fro POO practice',
                    projectImage: "",
                    skills: ['Java']
                }
            case 'rr-html':
                return {
                    title: 'R&R Funilaria',
                    description: 'Simple Landingpage for HTML practice',
                    projectImage: "",
                    skills: ['HTML', 'CSS', 'Javascript']
                }
            case 'shopping-react':
                return {
                    title: 'Fashion Website',
                    description: 'Webshop landingpage made with create-react-app',
                    projectImage: "",
                    skills: ['React', 'styled-component', 'JavaScript']

                }

            default:
                return {
                    title: 'Projeto não encontrado',
                    description: 'Nenhuma informação disponível.',
                    projectImage: '../fonte',
                    skills: [],
                };
        }
    };

    const data = getProjectData(project);

    return (
        <div className={s.cardContainer}>
            <img src={data.projectImage} alt={`${data.title}` + "-project-img"} />
            <div className={s.cardInfo}>
                <div className={s.cardTitleWrapper}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <div className={s.skillsWrapper}>
                    {data.skills.map((skill) => {
                        const Icon = skillsIcons[skill];
                        if (!Icon) return null;
                        return (
                            <Icon />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}