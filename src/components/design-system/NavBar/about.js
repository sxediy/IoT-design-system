// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'NavBar of Application Header';

export const importString = `
  import { NavBar } from 'components/gkh-components/AppHeader/NavBar'
`;

export const description = `
  Навигационная панель, отвечающая за переходы между основными разделами приложения.
`;

export const code = `
  <NavBar
    initActiveElement={ initActiveElement2 }
    navBarElements={ navBarElements }
  />;
`;


export const props = {
  initActiveElement: {
    type: 'string',
    description: 'Название начального активного элемента панели навигации'
  },
  navBarElements: {
    type: 'array',
    description: 'Список элементов с данными для панели навигации'
  },
};
