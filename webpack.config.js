module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    // -----
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
    // ----
  },
};
