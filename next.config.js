/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: prod ? false : true,
});

module.exports = withPWA({
  reactStrictMode: true,
});
