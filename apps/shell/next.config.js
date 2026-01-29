const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
// const remotes = isServer => {
//   const location = isServer ? 'ssr' : 'chunks';
//   return {
//     shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
//     checkout: `checkout@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
//   };
// };
module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
        new NextFederationPlugin({
          name: 'home',
          filename: 'static/chunks/remoteEntry.js',
          dts: false,
          exposes: {
            './shell': './src/pages/index.tsx',
          },
          // remotes: remotes(options.isServer),
          remotes: {
            portfolioContent: `portfolioContent@http://localhost:3001/_next/static/${
                isServer ? 'ssr' : 'chunks'
            }/remoteEntry.js`,
          },
          shared: {},
          extraOptions: {
            exposePages: true,
          },
        }),
    );

    return config;
  },
};