import s from "./Navbar.module.scss";
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
        <nav className={s.navContainer}>
            <div className={`${s.menuContent} ${menuOpen ? s.opened : ""}`}>
                <Link hrefLang="definir-rota" className={`${s.link} ${page == "home" ? s.selected : ""}`} onClick={handleMenuClose} href="">Home</Link>
                <Link hrefLang="definir-rota" className={`${s.link} ${page == "projects" ? s.selected : ""}`} onClick={handleMenuClose} href="">Projects</Link>
                <Link hrefLang="definir-rota" className={`${s.link} ${page == "about-me" ? s.selected : ""}`} onClick={handleMenuClose} href="">About Me</Link>
                <Link hrefLang="definir-rota" className={`${s.link} ${page == "contacts" ? s.selected : ""}`} onClick={handleMenuClose} href="">Contacts</Link>
            </div>
            <button className={s.menu} onClick={handleMenuToggle}>
                <MoreOptions />
            </button>
        </nav>

    )
}