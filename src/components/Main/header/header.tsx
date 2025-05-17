import "./header.scss";
import { PageProps } from "@/types";

export default function Header({ page }: PageProps) {
	return (
		<div className="header-container">
			<p>
				C:\Users\<span className={page}>LyanBrito</span>\portfolio&gt;
				<span className="pipe">|</span>
			</p>
			<nav>
				<a href="#home" rel="noopener noreferrer">
					<span className={page}>/</span>home
				</a>
				<a href="#about-me" rel="noopener noreferrer">
					<span className={page}>/</span>about-me
				</a>
				<a href="#projects" rel="noopener noreferrer">
					<span className={page}>/</span>projects
				</a>
				<a href="#contacts" rel="noopener noreferrer">
					<span className={page}>/</span>contacts
				</a>
			</nav>
		</div>
	);
}
