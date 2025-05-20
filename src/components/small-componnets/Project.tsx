import { Button } from "@/components/small-componnets/Button";
import "./styles.scss";
import { ProjectProps } from "@/types";
import { PlaceholderImage } from "@/assets/images/export";
import Image from "next/image";

export default function Project({
	projectTitle,
	projectDescription,
	projectAlt,
	projectImg,
	page,
	type,
	openLink,
	ghLink,
}: ProjectProps) {
	const imageSrc = projectImg || PlaceholderImage;
	return (
		<div className={`project ${type}`}>
			<div className="projectName">
				<h3>{projectTitle}</h3>
				<p>{projectDescription}</p>
				<div className="button-wrapper">
					<Button
						type="button"
						Btype={`primary-button ${page}`}
						content="Open"
						link={openLink}
					/>
					<Button
						type="button"
						Btype="primary-button"
						content="Github"
						link={ghLink}
					/>
				</div>
			</div>
			<Image width={305} height={208} src={imageSrc} alt={projectAlt} />
		</div>
	);
}
