import Vue from 'vue';
import VuePartner from 'vue-partner';
import App from './App.vue';

Vue.use(VuePartner);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
