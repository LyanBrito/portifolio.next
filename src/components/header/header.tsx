import "./header.scss";
import {PageProps} from "@/types";

export default function Header({ page }: PageProps){
	return (
		<div className="header-container">
			<p>
				C:\Users\<span className={page}>LyanBrito</span>\portifolio&gt;
				<span className="pipe">|</span>
			</p>
			<nav>
				<a href="home" target="_blank" rel="noopener noreferrer">
					<span className={page}>/</span>home
				</a>
				<a href="#about-me" target="_blank" rel="noopener noreferrer">
					<span className={page}>/</span>about-me
				</a>
				<a href="#projects" target="_blank" rel="noopener noreferrer">
					<span className={page}>/</span>projects
				</a>
				<a href="#contacts" target="_blank" rel="noopener noreferrer">
					<span className={page}>/</span>contacts
				</a>
			</nav>
		</div>
	);
}
