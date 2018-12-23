import Profile from 'pages/profile/profile';
import Login from 'pages/login/login';
import Home from 'pages//home/home';

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home,
    isPrivate: false,
  },
  {
    isNavBar: true,
    path: '/profile',
    name: 'Profile',
    component: Profile,
    isPrivate: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    isPrivate: false,
  }
];
