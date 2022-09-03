/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { i18n } = require('./next-i18next.config');

// // For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
// if (
//   process.env.LD_LIBRARY_PATH == null ||
//   !process.env.LD_LIBRARY_PATH.includes(
//     `${process.env.PWD}/node_modules/canvas/build/Release:`
//   )
// ) {
//   process.env.LD_LIBRARY_PATH = `${
//     process.env.PWD
//   }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
// }

// module.exports = withPlugins([[optimizedImages]]);

module.exports = {
  images: {
    domains: ['http://localhost:3000', '127.0.0.1', 'localhost'],
  },
  i18n,
};
