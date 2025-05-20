import "./styles.scss";
import "@/styles/main.scss";
import { ButtonProps } from "@/types";
import Link from "next/link";

export function Button({ content, Btype, link }: ButtonProps) {
	const safeLink = link || "#"; // Ou forneça uma URL padrão

	return (
		<Link
			href={safeLink}
			target="_blank"
			rel="noopener noreferrer"
			className={Btype}
			type="button"
		>
			{content}
		</Link>
	);
}
