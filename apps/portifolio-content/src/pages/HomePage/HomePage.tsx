import NavBar from "@/components/NavBar/NavBar"
import s from "./HomePage.module.scss"

export default function HomePage() {
    return (
        <div className={s.homeContainer}>
            <NavBar page="home" />
            <section className={s.titleWrapper}>
                <h1>Lyan Brito Web Developer</h1>
                <p>Hi! I'm a developer passionate in UI/UX & Web Development. Throughout my journey, I gained experience in several areas. Take a look on my works.</p>
                <div className={s.ATWcontainer}>
                    {/* svg da bolinha verde, manipulo a animação depois */}
                    <p>Available To Work</p>
                </div>
            </section>
        </div>
    )
}