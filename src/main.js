import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import VueAnalytics from 'vue-analytics';
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img';

Vue.use(VueTinyLazyloadImg, VueAnalytics, {
  id: 'UA-122318639-6'
});

// Require the main Sass manifest file
require('@/styles/main.scss');

Vue.config.productionTip = false;

new Vue({
  i18n,

  render: function(h) {
    return h(App);
  }
}).$mount('#app');
