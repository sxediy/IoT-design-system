import Login from 'pages/login/login';
import Home from 'pages//home/home';

export const routes = [
  {
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home,
    isPrivate: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    isPrivate: false,
  }
];
