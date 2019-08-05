import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';

// Require the main Sass manifest file
require('@/styles/main.scss');

Vue.config.productionTip = true;

new Vue({
  i18n,

  render: function(h) {
    return h(App);
  }
}).$mount('#app');
