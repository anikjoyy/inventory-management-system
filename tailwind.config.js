module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        bookstheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#323848',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
      'light',
      'cupcake',
    ],
  },
  plugins: [require('daisyui')],
};
