/** @type {import('next').NextConfig} */

// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
const { i18n } = require('./next-i18next.config');

module.exports = {
  images: {
    domains: ['http://localhost:3000', '127.0.0.1', 'localhost'],
  },
  i18n,
};
