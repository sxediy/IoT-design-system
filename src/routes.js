import News from './pages/news';
import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';
import ResourcesTablePage from './pages/pricing-table';

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home,
    isPrivate: true,
  },
  {
    isNavBar: true,
    path: '/news',
    name: 'News',
    component: News,
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
  },
  {
    isNavBar: true,
    path: '/pricing-table',
    name: 'ResourcesTablePage',
    component: ResourcesTablePage,
    isPrivate: false,
  }
];
