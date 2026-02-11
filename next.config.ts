import type {NextConfig} from "next";
import path from "node:path";

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: true,
    /* config options here */
    reactCompiler: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "src")],

        //         sassOptions: {
        //   includePaths: [path.join(__dirname, "src")],
        //   additionalData: `@use "styles/utils" as *;`
        // }
    },
};

export default nextConfig;
