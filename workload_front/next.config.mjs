/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
        @import "~@/styles/common/temp.scss";`,
  },
};

export default nextConfig;
