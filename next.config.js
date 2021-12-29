/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages]]);

module.exports = nextTranslate({
  images: {
    domains: ["http://localhost:3000", "127.0.0.1", "localhost"],
  },
});
