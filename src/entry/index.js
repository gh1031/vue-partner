/* eslint-disable */
import Vue from 'vue';
import App from '@/App.vue';
import Router from 'vue-router';
import router from './router';
import store from '../store';
import '@/packages/index.scss';
import pButton from '@/packages/Button';
import pMessage from '@/packages/Message';

Vue.use(Router);
Vue.config.productionTip = false;

Vue.component('p-button', pButton);
Vue.component('p-message', pMessage);

window.vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
