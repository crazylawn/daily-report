module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],

  //purge 를 주석처리해버리면 .tsx, ts 에서 tailwind css 가 안먹힌다...;;;
  //이유 찾음~~ tailwind v3 에서 purge ===> content 로 변경되었다~~~
  //이번에 안된이유는 ./src 폴더를 인식못해서 ㅠ.ㅠ
  //'./pages/**/*.{js,ts,jsx,tsx}',
  // 이렇게 되어있었다 ㅠ.ㅠ 반성하기~ 설정 파일은 조심해야한다.

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
