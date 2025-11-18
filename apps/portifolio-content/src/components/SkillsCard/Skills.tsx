import s from './Skills.module.scss'
import { ReactElement } from "react";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/ArrowIcon";

type CardProps = {
    type: keyof typeof s,
    title: string,
    icon: any,
    link: string,
}

export default function SkillsCard({ type, title, icon, link }: CardProps) {
    return (
        <div className={`${s[type]} ${s.cardContainer}`}>
            <div className={s.cardText}>
                {icon}
                <p>{title}</p>
            </div>

            <Link target="_blank" href={link}>See documentation <ArrowIcon /></Link>
        </div>
    )
}