import React from "react";

import {
    AzuresqldatabaseOriginal, BiomeOriginal, BootstrapOriginal,
    Css3Original,
    FigmaOriginal,
    GitOriginal, Html5Original,
    JavaOriginal, JavascriptOriginal, MavenOriginal, MysqlOriginal, NextjsOriginal, NodejsOriginal, PostmanOriginal,
    ReactnativeOriginal,
    ReactOriginal, SassOriginal,
    SpringOriginal, SqlalchemyOriginal, SqldeveloperOriginal, StyledcomponentsOriginal, TailwindcssOriginal,
    TurboOriginal,
    TypescriptOriginal, VercelOriginal, ViteOriginal, WebpackOriginal
} from "devicons-react";

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
    // LessJS: "",
    Vite: ViteOriginal,
    Postman: PostmanOriginal,
    Vercel: VercelOriginal,
    BiomeJS: BiomeOriginal,
    NodeJS: NodejsOriginal,
    Maven: MavenOriginal,
    ReactNative: ReactnativeOriginal,
    "module-federation": WebpackOriginal,
    Turborepo: TurboOriginal,
};
