import s from "./stylesSK.module.scss";
import hs from "@/pages/HomePage/HomePage.module.scss";

export default function AboutMeSK() {
    return (
        <div className={hs.homeContainer}>
            <nav className={s.navContainer}>
            </nav>
            <div className={s.projectsContainer}>
                <div className={s.titleh1}></div>
                <p className={s.text}></p>
                <div className={s.element}></div>
            </div>
            <div className={s.textWrapper}>
                <div className={s.skillsWrapper}>
                    <div className={s.titleh3}></div>
                    <div className={s.text}></div>
                </div>
                <div className={s.link}></div>
            </div>
            <div className={s.skillsWrapper}>
                <div className={s.titleh4}></div>
                <div className={s.skills}></div>

                <div className={s.skillsWrapper}>
                    <div className={s.titleh4}></div>
                    <div className={s.skills}></div>
                </div>
                <div className={s.skillsWrapper}>
                    <div className={s.titleh4}></div>
                    <div className={s.skills}></div>
                </div>
                <div className={s.skillsWrapper}>
                    <div className={s.titleh4}></div>
                    <div className={s.skills}></div>
                </div>
                <footer className={s.footer}></footer>
            </div>
        </div>
    )
}