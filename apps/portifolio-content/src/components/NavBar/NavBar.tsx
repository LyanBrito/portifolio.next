import styles from "./Navbar.module.scss";

export default function NavBar({ page }: any) {
    return (
        <nav className={styles.navContainer}>
            <a className={page} href="">Home</a>
            <a className={page} href="">Projects</a>
            <a className={page} href="">About Me</a>
            <a className={page} href="">Contacts</a>
        </nav>
    )
}