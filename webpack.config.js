module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    // -----
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      // '@assets': path.resolve(__dirname, 'public/assets'),
    },
    // ----
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
  },
};
