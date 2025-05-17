import { ReactElement } from "react";

export type PageProps = {
	page: string;
};
export type SubmitButtonProps = {
	type: string;
	disabled?: boolean;
};
export type ButtonProps = {
	Btype: string;
	type: string;
	content: ReactElement | string;
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
	projectImg: string;
	page: string;
};
