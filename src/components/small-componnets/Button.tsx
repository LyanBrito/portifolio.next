import "./styles.scss";
import "@/styles/main.scss";
import { ButtonProps, SubmitButtonProps } from "@/types";

export function Button({ content, Btype }: ButtonProps) {
	return (
		<button className={Btype} type="button">
			{content}
		</button>
	);
}
