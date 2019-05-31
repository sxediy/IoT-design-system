// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'Application Header';

export const importString = `
  import { AppHeader } from 'components/gkh-components/AppHeader/AppHeader'
`;

export const description = `
  Составной компонент верхней навигационной панели приложения (пример из проекта "ЖКХ").
`;

export const code = `
  <AppHeader
    initActiveElement={ initActiveElement1 }
    navBarElements={ navBarElements }
    profileElements={ profileElements }
  />;
`;


export const props = {
  initActiveElement: {
    type: 'string',
    description: 'Название начального активного элемента "шапки" приложения'
  },
  navBarElements: {
    type: 'array',
    description: 'Список элементов с данными для панели навигации'
  },
  profileElements: {
    type: 'array',
    description: 'Список названий вкладок выпадающего меню под иконкой профиля'
  }
};
