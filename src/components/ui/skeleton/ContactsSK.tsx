import s from "./stylesSK.module.scss";
import hs from "@/app/HomePage/HomePage.module.scss";

export default function ContactsSK() {
    return (
        <section className={hs.homeContainer}>
            <nav className={s.navContainer}>
            </nav>
            <div className={s.projectsContainer}>
                <div className={s.titleh1}></div>
            </div>
            <div className={s.formWrapper}>
                <div className={s.inputWrapper}>
                    <div className={s.text}></div>
                    <div className={s.input}></div>
                    <div className={s.input}></div>
                    <div className={s.input}></div>
                    <div className={s.textarea}></div>
                    <div className={s.fbutton}></div>
                </div>
                <div className={s.socialWrapper}>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                </div>
            </div>

            <footer className={s.footer}></footer>
        </section>
    );
}
