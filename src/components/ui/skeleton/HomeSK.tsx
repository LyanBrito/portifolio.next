import s from "./stylesSK.module.scss";
import hs from "@/app/HomePage/HomePage.module.scss";

export default function HomeSK() {
    return (
        <div className={hs.homeContainer}>
            <nav className={s.navContainer}>
            </nav>
            <div className={s.hprojectsContainer}>
                <div className={s.htitle}></div>
                <p className={s.htext}></p>
                <div className={s.element}></div>
            </div>
            <div className={s.hppWrapper}>
                <div className={s.titleh3}></div>
                <div className={s.text}></div>
                <div className={s.hprojectsWrapper}>
                    <div className={s.ppFlip}></div>
                    <div className={s.ppFlip}></div>
                    <div className={s.ppFlip}></div>
                </div>
            </div>
            <div className={s.hppWrapper}>
                <div className={s.titleh3}></div>
                <div className={s.text}></div>
                <div className={s.hprojectsWrapper}>
                    <div className={s.ppInfo}></div>
                    <div className={s.ppInfo}></div>
                </div>
            </div>
            <div className={s.subtit}></div>
            <div className={s.social}></div>
            <div className={s.social}></div>
            <footer className={s.footer}></footer>
        </div>
    )
}