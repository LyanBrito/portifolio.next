import s from "./stylesSK.module.scss";
import hs from "@/app/HomePage/HomePage.module.scss";

export default function ProjectsPageSK() {
    return (
        <section className={hs.homeContainer}>
            <nav className={s.navContainer}>
            </nav>
            <div className={s.projectsContainer}>
                <div className={s.titleh1}></div>
                <p className={s.text}></p>
            </div>
            <div className={s.ppWrapper}>
                <div className={s.ppContainer}>
                    <div className={s.ppInfo}></div>
                    <div className={s.ppFlip}></div>
                </div>
                <div className={s.ppContainer}>
                    <div className={s.ppInfo}></div>
                    <div className={s.ppFlip}></div>
                </div>
            </div>
            <section className={s.spContainer}>
                <div className={s.secTitleWrapper}>
                    <div className={s.titleh3}></div>
                    <div className={s.text}></div>
                </div>
                <div className={s.projectsWrapper}>
                    <div className={s.projectCard}></div>
                    <div className={s.projectCard}></div>
                    <div className={s.projectCard}></div>
                    <div className={s.projectCard}></div>
                    <div className={s.projectCard}></div>
                    <div className={s.projectCard}></div>
                </div>
            </section>
            <footer className={s.footer}></footer>
        </section>
    );
}
