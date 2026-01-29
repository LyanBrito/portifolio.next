/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR

// const remotes = isServer => {
//     const location = isServer ? 'ssr' : 'chunks';
//     return {
//         shell: `shell@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
//     };
// };


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

module.exports = {
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'portifolio-content',
                filename: 'static/chunks/remoteEntry.js',
                dts: false,
                exposes: {
                    './home': './src/pages/index.tsx',
                },
                // remotes: remotes(options.isServer),
                shared: {
                    // reactStrictMode: true,
                },
                extraOptions: {
                    exposePages: true,
                },
            }),
        );

        return config;
    },
};
