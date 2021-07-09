import Vue from 'vue';
import App from './App.vue';
import './assets/css/base/reset.scss';
import './assets/css/base/safe-area.scss';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app', 
  router,
  render: h => h(App),
})
