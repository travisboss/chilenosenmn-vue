module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? 'chilenosenmn-vue' : '/'
};
