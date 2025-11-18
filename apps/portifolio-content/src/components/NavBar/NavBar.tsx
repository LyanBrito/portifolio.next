import s from "./Navbar.module.scss";
import Link from "next/link";
import MoreOptions from "@/assets/icons/MoreOptions";
import {useState} from "react";

type NavbarProps = {
    page: string;
    links: string[];
};

export default function NavBar({page, links}: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuClose = () => {
        setMenuOpen(false)
    }
    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    return (
        <nav className={s.navContainer}>
            <div className={`${s.menuContent} ${menuOpen ? s.opened : ""}`}>
                <Link href={links[0]} className={`${s.link} ${page == "home" ? s.selected : ""}`}
                      onClick={handleMenuClose}>Home</Link>
                <Link href={links[1]} className={`${s.link} ${page == "about-me" ? s.selected : ""}`}
                      onClick={handleMenuClose}>About Me</Link>
                <Link href={links[2]} className={`${s.link} ${page == "projects" ? s.selected : ""}`}
                      onClick={handleMenuClose}>Projects</Link>
                <Link href={links[3]} className={`${s.link} ${page == "contacts" ? s.selected : ""}`}
                      onClick={handleMenuClose}>Contacts</Link>
            </div>
            <button className={s.menu} onClick={handleMenuToggle}>
                <MoreOptions/>
            </button>
        </nav>

    )
}