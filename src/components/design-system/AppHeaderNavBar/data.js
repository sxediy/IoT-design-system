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
    activeNavLink='Objects'
    setActiveNavLink= {() => {}}
  />;
`;


export const props = {
  activeNavLink: {
    type: 'string',
    description: 'название активного элемента панели навигации'
  },
  setActiveNavLink: {
    type: 'function',
    description: 'по клику мышки меняет активный элемент панели навигации'
  },
};

