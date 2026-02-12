import React from "react";

import TurborepoIcon from "@/assets/icons/dev-icons/TurborepoIcon";
import ReactIcon from "@/assets/icons/dev-icons/ReactIcon";
import SpringIcon from "@/assets/icons/dev-icons/SpringIcon";
import GitIcon from "@/assets/icons/dev-icons/GitIcon";
import FigmaIcon from "@/assets/icons/dev-icons/FigmaIcon";
import TsIcon from "@/assets/icons/dev-icons/TsIcon";
import JsIcon from "@/assets/icons/dev-icons/JsIcon";
import HtmlIcon from "@/assets/icons/dev-icons/HtmlIcon";
import CssIcon from "@/assets/icons/dev-icons/CssIcon";
import ScssIcon from "@/assets/icons/dev-icons/ScssIcon";
import JavaIcon from "@/assets/icons/dev-icons/JavaIcon";
import MySQLIcon from "@/assets/icons/dev-icons/MySQLIcon";
import TailwindIcon from "@/assets/icons/dev-icons/TailwindIcon";
import StyledComponentsIcon from "@/assets/icons/dev-icons/StyledComponentsIcon";
import BootstrapIcon from "@/assets/icons/dev-icons/BootstrapIcon";
import PostmanIcon from "@/assets/icons/dev-icons/PostmanIcon";
import VercelIcon from "@/assets/icons/dev-icons/VercelIcon";
import BiomeIcon from "@/assets/icons/dev-icons/BiomeIcon";
import NodeJSIcon from "@/assets/icons/dev-icons/NodeJSIcon";
import MavenIcon from "@/assets/icons/dev-icons/MavenIcon";
import MFEIcon from "@/assets/icons/dev-icons/MFEIcon";
import GithubIcon from "@/assets/icons/dev-icons/GithubIcon";

export const skillsIcons: Record<string, React.FC> = {
    React: ReactIcon,
    Spring: SpringIcon,
    Git: GitIcon,
    Figma: FigmaIcon,
    TypeScript: TsIcon,
    JavaScript: JsIcon,
    HTML: HtmlIcon,
    CSS: CssIcon,
    SCSS: ScssIcon,
    // NextJS: NextJs,
    Java: JavaIcon,
    MySQL: MySQLIcon,
    TailwindCSS: TailwindIcon,
    "styled-components": StyledComponentsIcon,
    Bootstrap: BootstrapIcon,
    // Vite: ViteOriginal,
    Postman: PostmanIcon,
    Vercel: VercelIcon,
    BiomeJS: BiomeIcon,
    NodeJS: NodeJSIcon,
    Maven: MavenIcon,
    // ReactNative: ReactnativeOriginal,
    "module-federation": MFEIcon,
    Turborepo: TurborepoIcon,
    // lessJS: LessPlainWordmark,
    Github: GithubIcon,
};
