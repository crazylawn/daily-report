module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
      '@babel/typescript',
    ],
  ],
  plugins: [
    // '@emotion/babel-plugin',
    'babel-plugin-macros',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@styles': './src/styles',
          // "@layouts": "./src/layouts",
          // "@providers": "./src/providers",
          // "@services": "./src/services",
          // "@models": "./src/models",
          // "@styles": "./src/styles",
          // "@icons": "./src/icons",
          // "@stores": "./src/stores",
          // "@types": "./src/@types",
          // "@atoms": "./src/components/atoms",
          // "@molecules": "./src/components/molecules",
          // "@organisms": "./src/components/organisms"
        },
      },
    ],
  ],
};
