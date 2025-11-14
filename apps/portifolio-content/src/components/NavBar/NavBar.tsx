import styles from "./Navbar.module.scss";
import Link from "next/link";
import MoreOptions from "@/assets/icons/MoreOptions";
import {useState} from "react";

type NavbarProps = {
    page: string;
};

export default function NavBar({page}: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setMenuOpen(false)
    }
    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    return (
        <nav className={styles.navContainer}>
            <div className={`${styles.menuContent} ${menuOpen ? styles.opened : ""}`}>
                <Link className={`${styles.link} ${page == "home" ? styles.selected : ""}`} onClick={handleMenuClose} href="">Home</Link>
                <Link className={`${styles.link} ${page == "projects" ? styles.selected : ""}`} onClick={handleMenuClose} href="">Projects</Link>
                <Link className={`${styles.link} ${page == "about-me" ? styles.selected : ""}`} onClick={handleMenuClose} href="">About Me</Link>
                <Link className={`${styles.link} ${page == "contacts" ? styles.selected : ""}`} onClick={handleMenuClose} href="">Contacts</Link>
            </div>
            <button className={styles.menu} onClick={handleMenuToggle}>
                <MoreOptions />
            </button>
        </nav>

    )
}