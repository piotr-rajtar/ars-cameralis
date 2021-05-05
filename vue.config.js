module.exports = {
  css: {
    extract: false,
    modules: false,
    loaderOptions: {
      scss: {
        modules: {
          localIdentName: '[name]-[hash]',
        },
        localsConvention: 'camelCase',
      },
    },
  },
};
