import "./styles.scss";
import "@/styles/main.scss";
import {ButtonProps} from "@/types";

export function Button({ content, type } : ButtonProps) {
	return (
		<button className={type} type="button">
			{content}
		</button>
	);
}
