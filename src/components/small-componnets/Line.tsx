import "./styles.scss";
import { PageProps } from "@/types";

export function Line({ page }: PageProps) {
	return (
		// biome-ignore lint/style/useSelfClosingElements: <explanation>
		<div className={`line page-color ${page}`}></div>
	);
}
