/* eslint-disable @typescript-eslint/no-var-requires */
const { paths } = require('./paths.ts');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]-[hash]',
        },
        localsConvention: 'camelCaseOnly',
      },
    },
  },
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://ars-cameralis.netlify.app', paths }),
    ],
  },
};
