import Vue from 'vue';
// import VuePartner from 'vue-partner';
import App from './App.vue';
import Button from './packages/Button.vue';
import './packages/index.scss';

// Vue.use(VuePartner);
Vue.config.productionTip = false;
Vue.component(Button.name, Button);

new Vue({
  render: h => h(App),
}).$mount('#app');
