import type {NextConfig} from "next";
import path from "node:path";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
        sassOptions: {
        includePaths: [path.join(__dirname, "src")],
    },
};

export default nextConfig;
