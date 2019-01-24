// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'Application Header';

export const importString = `
  import { AppHeader } from 'components/gkh-components/AppHeader/AppHeader'
`;

export const description = `
   Верхняя панель приложения, включающая в себя логотип компании, навигационную панель, выпадающие списки
`;

export const code = `
  <AppHeader
    initActiveElement='Reports'
  />;
`;


export const props = {
  initActiveElement: {
    type: 'string',
    description: 'название активного элемента панели навигации'
  }
};

