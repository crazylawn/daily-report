module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: {
    preserveHtmlElements: false,
    content: ['src/**/*.[j|t]s[x]'],
  },
  darkMode: 'class', //다크모드 적용
  theme: {
    extend: {},
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1024px',
      xl: '1640px',
    },
  },
  plugins: ['tailwindcss', 'postcss-preset-env'],
};
