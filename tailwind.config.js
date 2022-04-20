module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
