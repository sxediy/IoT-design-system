// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ProfileWithDropdown of Application Header';

export const importString = `
  import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown'
`;

export const description = `
  Иконка со встроенным выпадающим списком, вызывающимся при наведении указателя мышки.
`;

export const code = `
  <ProfileWithDropdown
    profileElements={ profileElements }
  />;
`;


export const props = {
  profileElements: {
    type: 'array',
    description: 'Список названий вкладок выпадающего меню под иконкой профиля'
  }
};

