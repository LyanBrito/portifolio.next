import s from "./Footer.module.scss"
import Link from "next/link"
import ArrowIcon from "@/assets/icons/ArrowIcon"

type FooterProps = {
	page: string
}

export default function Footer({ page }: FooterProps) {
	return (
		<footer className={s.footerContainer}>
			<p>2026 © — Lyan Brito</p>
			<nav className={s[page]}>
				<Link href="#home">Home</Link>
				<Link href="#about-me">About Me</Link>
				<Link href="#projects">Projects</Link>
				<Link href="#home">
					Go Up
					<ArrowIcon />
				</Link>
			</nav>
		</footer>
	)
}
