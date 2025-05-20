import { ReactElement } from "react";
import { StaticImageData } from "next/image";

export type PageProps = {
	page: string;
};
export type HeaderProps = {
	index: string;
};
export type SubmitButtonProps = {
	type: string;
	disabled?: boolean;
};
export type ButtonProps = {
	Btype: string;
	type: string;
	content: ReactElement | string;
	link: string;
};
export type CardProps = {
	title: string;
	content: string;
};
export type TitleProps = {
	index: string;
	title: string;
};
export type ProjectProps = {
	projectTitle: string;
	projectDescription: string;
	projectAlt: string;
	projectImg: string | StaticImageData;
	page: string;
	type: string;
	openLink: string;
	ghLink: string;
};
