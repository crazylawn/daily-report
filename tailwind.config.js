module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', //다크모드 적용
  theme: {
    extend: {
      colors: {
        'grayish-red': '#C1A3A3',
        'very-dark-grayish-red': '#694e4e',
        'light-grayish-red': '#f3c5c5',
        'dark-grayish-red': '#886F6F',
        'red-orange': '#FFBDAE',
        'more-light-grayish-red': '#EFE1E1',
        'light-gray': '#C4C4C4',
        'light-pink': '#ffb6c1',
        'washed-out-crimson': '#ffb3a7',
        'flyaway-blue': '#8CC0DE',
        'citrine-white': '#FAF0D7',
        'indian-khaki': '#C3B091',
        'mostly-desaturated-dark-orange': '#8E806A',
        hopbush: '#CE7BB0',
        wisteria: '#A267AC',
        froly: '#F76A8C',
        'sweet-corn': '#F8DC88',
      },
      width: {
        128: '32rem',
      },
      height: {
        128: '32rem',
        253: '64rem',
        254: '64.25rem',
        257: '65rem',
      },
      fontFamily: {
        sans: ['IM_Hyemin-Bold', 'IM_Hyemin-Regular'],
      },
    },
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1024px',
      xl: '1640px',
    },
    fontWeight: {
      ultralight: 100,
      light: 200,
      thin: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    keyframes: {
      show: {
        '0%': { transform: 'scale(0)', opacity: 1 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      show: 'show 200ms cubic-bezier(.6, 0, .4, 1) 1000ms forwards',
      fadeIn: 'fadeIn 300ms cubic-bezier(.6, 0, .4, 1) forwards',
    },
  },
  plugins: ['tailwindcss'],
};
