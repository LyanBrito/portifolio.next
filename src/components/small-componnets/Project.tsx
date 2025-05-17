import { Button } from "@/components/small-componnets/Button";
import "./styles.scss";
import {ProjectProps} from "@/types";

export default function Project({
	projectTitle,
	projectDescription,
	projectAlt,
	projectImg,
	page,
} : ProjectProps) {
	return (
		<div className="project">
			<div className="projectName">
				<h3>{projectTitle}</h3>
				<p>{projectDescription}</p>
				<div className="button-wrapper">
					<Button type={`primary-button ${page}`} content="Open" />{" "}
					<Button type="primary-button" content="Github" />
				</div>
			</div>
			<img src={projectImg} alt={projectAlt} />
		</div>
	);
}
