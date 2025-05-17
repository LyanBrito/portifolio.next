import "./mainPage.scss";
import Header from "@/components/Main/header/header";
import Hero from "@/components/Main/hero/Hero";

export function Main() {
	return (
		<div className="main-container">
			<Header page="pg1" />
			<Hero page="pg1" />
		</div>
	);
}
