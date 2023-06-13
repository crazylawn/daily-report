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
    // '@emotion/babel-plugin', // 버전 8이상은 필요없다고 해서 일단 주석처리
    'babel-plugin-macros',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@styles': './src/styles',
          '@icons': './src/icons',
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
