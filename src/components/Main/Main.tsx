import "./mainPage.scss";
import Header from "@/components/Main/header/header";
import Hero from "@/components/Main/hero/Hero";

export function Main() {
	return (
		<section className="main-container">
			<Header index="&gt;" page="pg1" />
			<Hero page="pg1" />
		</section>
	);
}
