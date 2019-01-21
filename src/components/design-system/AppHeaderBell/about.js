// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = '"Звоночек"';

export const importString = `
  import { Bell } from 'components/gkh-components/AppHeader/Bell'
`;

export const description = `
  Иконка алерта
`;

export const code = `
  <Bell
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

