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

module.exports = nextConfig;