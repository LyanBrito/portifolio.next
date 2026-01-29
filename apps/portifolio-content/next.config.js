/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: ["./src", "./src/styles"], // garante que o Sass encontre "styles"
        additionalData: `
      @use "styles/utils/variables" as *;
      @use "styles/utils/mixins" as *;
    `,
    },
};
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'next2',
                filename: 'static/chunks/remoteEntry.js',
                remotes: {
                    next1: `next1@http://localhost:3001/_next/static/${
                        isServer ? 'ssr' : 'chunks'
                    }/remoteEntry.js`,
                },
                exposes: {
                    './test': './src/pages/index.tsx',
                },
                shared: {
                    // whatever else
                },
            }),
        );

        return config;
    },
};