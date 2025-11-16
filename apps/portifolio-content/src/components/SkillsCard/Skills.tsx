import s from './Skills.module.scss'
import {ReactElement} from "react";

type CardProps = {
    type: keyof typeof s,
    title: string,
    icon: any,
}

export default function SkillsCard({type, title, icon}: CardProps) {
    return (
        <div className={`${s[type]} ${s.cardContainer}`}>
            {icon}
            <p>{title}</p>
        </div>
    )
}