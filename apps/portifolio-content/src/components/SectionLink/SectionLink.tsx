import s from "./SectionLink.module.scss";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/ArrowIcon";

export type SectionLinkProps = {
    title: string,
    description: string,
    linkLabel: string,
    linkRef: string
    isBlank: boolean
}

export default function SectionLink({ title, description, linkLabel, linkRef, isBlank}: SectionLinkProps) {
    return (
        <div className={s.secTextWrapper}>
            <div className={s.secTitleWrapper}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Link target={isBlank? "_blank" : "_self"} href={linkRef}>{linkLabel}<ArrowIcon/></Link>
        </div>
    )
}
