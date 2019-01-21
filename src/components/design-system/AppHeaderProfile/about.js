// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ProfileWithDropdown of Application Header';

export const importString = `
  import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown'
`;

export const description = `
  Иконка профиля с дропдауном верхней панели приложения
`;

export const code = `
  <ProfileWithDropdown
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

