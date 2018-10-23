import Button from './Button.vue';

const partner = [
  Button,
];

const install = function install(Vue) {
  partner.forEach((item) => {
    Vue.component(item.name, item);
  });
};

if (window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1-beta2',
  install,
  Button,
};
