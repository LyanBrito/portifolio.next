// import Image from "next/image";
import "@/styles/main.scss";
import "./page.scss";
import { Main } from "@/components/Main/Main";
import { AboutMe } from "@/components/about-me/AboutMe";
import { Projects } from "@/components/projects/Projects";
import Contacts from "@/components/contacts/Contacts";

export default function Home() {
	return (
		<div className="page">
			<Main />
			<AboutMe page="pg1" />
			<Projects page="pg1" />
			<Contacts page="pg1" />
		</div>
	);
}
