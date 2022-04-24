module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  //어떠한 폴더에서든 .stories.tsx 파일명을 가지면, Storybook이 이를 인식하여 화면에 표시하게 된다.
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    storyStoreV7: true, //Bundle splitting :스토리북을 시작하면 로딩 시간이 개선
  },
  typescript: { reactDocgen: false },
};
