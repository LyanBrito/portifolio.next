import "./styles.scss";
import "@/styles/main.scss";
import {ButtonProps, SubmitButtonProps} from "@/types";

export function SubButton({ content, type, disabled, Btype} : SubmitButtonProps & ButtonProps) {
	return (
	// @ts-ignore
		<button disabled={disabled} className={Btype} type={type}>
			{content}
		</button>
	);
}
