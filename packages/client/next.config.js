const withPWA = require("next-pwa");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
  experimental: {
    outputStandalone: true,
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
});
