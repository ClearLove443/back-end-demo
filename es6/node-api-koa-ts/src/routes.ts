import homeController from './controller/home-controller';

export default [
  {
    path: '/test',
    method: 'get',
    action: homeController.hello,
  },
];
