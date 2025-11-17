import {forEachEntryModule} from "next/dist/build/webpack/utils";
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
                    projectImage: "../fonte",
                    skills: ['HTML', 'CSS', 'Spring'],
                };
                case 'spring':
                    return {
                        title: 'Spring',
                        description: 'Simple JPA repository',
                        projectImage: "",
                        skills: ['Java', 'Sping'],
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
        <div>
            <img src={data.projectImage} alt={data.title} />
            <div>
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <div>
                    {data.skills.map((skill, index) => (
                        <div key={index} className={s.skillIcon}>
                            {skillsIcons[skill]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}