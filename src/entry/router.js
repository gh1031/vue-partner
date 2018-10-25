import Router from 'vue-router';

const Button = () => import('@/pages/button');
const Message = () => import('@/pages/message');

const routers = new Router({
  routes: [
    {
      path: '/',
      redirect: '/p-button',
    },
    {
      path: '/p-button',
      component: Button,
    },
    {
      path: '/p-message',
      component: Message,
    },
  ],
});

export default routers;
