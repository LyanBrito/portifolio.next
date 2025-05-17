import { Line } from "@/components/small-componnets/Line";
import "./styles.scss";
import { PageProps, TitleProps } from "@/types";

export function TitleWrapper({ page, title, index }: PageProps & TitleProps) {
	return (
		<div className="title-wrapper">
			<h3>
				<span className={page}>{index}</span>
				{title}
			</h3>
			<Line page={page} />
		</div>
	);
}
