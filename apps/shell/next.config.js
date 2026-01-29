    const NextFederationPlugin = require('@module-federation/nextjs-mf');

    module.exports = {
        webpack(config, options) {
            const { isServer } = options;
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'next1',
                    filename: 'static/chunks/remoteEntry.js',
                    remotes: {
                        next2: `next2@http://localhost:3000/_next/static/${
                            isServer ? 'ssr' : 'chunks'
                        }/remoteEntry.js`,
                    },
                }),
            );

            return config;
        },
    };