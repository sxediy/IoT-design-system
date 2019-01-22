// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'NavBar of Application Header';

export const importString = `
  import { NavBar } from 'components/gkh-components/AppHeader/NavBar'
`;

export const description = `
  Навигационная панель верхней панели приложения
`;

export const code = `
  <NavBar
    activeElement='Objects'
  />;
`;


export const props = {
  activeNavLink: {
    type: 'string',
    description: 'название активного элемента панели навигации'
  }
};

