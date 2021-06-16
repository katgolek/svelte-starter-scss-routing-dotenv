import autoprefixer from 'autoprefixer';



module.exports = {
    preprocess: autoPreprocess({
      scss: {  prependData: `@import 'src/styles/main.scss';`},
      postcss: { plugins: [require('autoprefixer')] }
    }),
   };
