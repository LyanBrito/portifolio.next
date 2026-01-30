import React from "react";

import {
    AzuresqldatabaseOriginal, BiomeOriginal, BootstrapOriginal,
    Css3Original,
    FigmaOriginal, GithubOriginal,
    GitOriginal, Html5Original,
    JavaOriginal, JavascriptOriginal,
    LessPlainWordmark, MavenOriginal, MysqlOriginal, NextjsOriginal, NodejsOriginal, PostmanOriginal,
    ReactnativeOriginal,
    ReactOriginal, SassOriginal,
    SpringOriginal, StyledcomponentsOriginal, TailwindcssOriginal,
    TypescriptOriginal, VercelOriginal, ViteOriginal, WebpackOriginal
} from "devicons-react";
import TurborepoIcon from "@/assets/icons/TurborepoIcon";

export const skillsIcons: Record<string, React.FC> = {
    React: ReactOriginal,
    Spring: SpringOriginal,
    Git: GitOriginal,
    Figma: FigmaOriginal,
    TypeScript: TypescriptOriginal,
    JavaScript: JavascriptOriginal,
    HTML: Html5Original,
    CSS: Css3Original,
    SCSS: SassOriginal,
    NextJS: NextjsOriginal,
    Java: JavaOriginal,
    MySQL: MysqlOriginal,
    TailwindCSS: TailwindcssOriginal,
    "styled-components" : StyledcomponentsOriginal,
    Bootsrap: BootstrapOriginal,
    Vite: ViteOriginal,
    Postman: PostmanOriginal,
    Vercel: VercelOriginal,
    BiomeJS: BiomeOriginal,
    NodeJS: NodejsOriginal,
    Maven: MavenOriginal,
    ReactNative: ReactnativeOriginal,
    "module-federation": WebpackOriginal,
    Turborepo: TurborepoIcon,
    lessJS: LessPlainWordmark,
    Github: GithubOriginal,
    Biome: BiomeOriginal,
};
