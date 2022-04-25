module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // purge: {
  //   preserveHtmlElements: false,
  //   content: ['src/**/*.[j|t]s[x]'],
  // },
  darkMode: 'class', //다크모드 적용
  theme: {
    extend: {
      colors: {
        'grayish-red': '#C1A3A3',
        'very-dark-grayish-red': '#694e4e',
        'light-grayish-red': '#f3c5c5',
        'dark-grayish-red': '#886F6F',
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
  plugins: [
    'tailwindcss',
    // plugin(({ addComponents }) => {
    //   const components = {
    //     '.flex-center': {
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     },
    //   };
    //   addComponents(components);
    // }),
  ],
};
