import "./styles.scss";
import {ButtonProps, PageProps} from "@/types";

export function Card( { title, content }: ButtonProps ) {
	return (
		<div className="card">
			<p className="card-title">{title}</p>
			<p>{content}</p>
		</div>
	);
}
