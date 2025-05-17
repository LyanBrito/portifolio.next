import { NextConfig } from 'next';

const nextConfig: NextConfig = {

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,      // garante que só JS/TS importem SVGs
            use: ['@svgr/webpack'],    // transforma SVG em componente React
        });
        return config;
    },


};

export default nextConfig;
