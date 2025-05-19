"use client";

import "./header.scss";
import { PageProps } from "@/types";
import { useState, useRef, useEffect } from "react";
import { MenuIcon, XMenuIcon } from "@/assets/icons/export";

export default function Header({ page }: PageProps) {
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);

	const handleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	// Fecha o menu ao clicar fora
	useEffect(() => {
		function onClickOutside(e: MouseEvent) {
			if (
				menuOpen &&
				navRef.current &&
				buttonRef.current &&
				!navRef.current.contains(e.target as Node) &&
				!buttonRef.current.contains(e.target as Node)
			) {
				setMenuOpen(false);
			}
		}
		document.addEventListener("mousedown", onClickOutside);
		return () => document.removeEventListener("mousedown", onClickOutside);
	}, [menuOpen]);

	const handleLinkClick = () => setMenuOpen(false);

	return (
		<header className="header-container">
			<p>
				C:\Users\<span className={page}>LyanBrito</span>\portfolio&gt;
				<span className="pipe">|</span>
			</p>
			<div ref={buttonRef} className="menu-icon-wrapper" onClick={handleMenu}>
				{menuOpen ? (
					<XMenuIcon width={24} height={24} />
				) : (
					<MenuIcon width={24} height={24} />
				)}
			</div>

			<nav ref={navRef} className={menuOpen ? "open" : ""}>
				<a href="#home" rel="noopener noreferrer" onClick={handleLinkClick}>
					<span className={page}>/</span>home
				</a>
				<a href="#about-me" rel="noopener noreferrer" onClick={handleLinkClick}>
					<span className={page}>/</span>about-me
				</a>
				<a href="#projects" rel="noopener noreferrer" onClick={handleLinkClick}>
					<span className={page}>/</span>projects
				</a>
				<a href="#contacts" rel="noopener noreferrer" onClick={handleLinkClick}>
					<span className={page}>/</span>contacts
				</a>
			</nav>
		</header>
	);
}
