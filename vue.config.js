module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        modules: {
          localIdentName: '[name]-[hash]',
        },
        localsConvention: 'camelCaseOnly',
      },
    },
  },
};
