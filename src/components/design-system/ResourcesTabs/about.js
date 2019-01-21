
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ResourceTabs';

export const importString = `
  import { ResourceTabs } from 'components/gkh-components/ResourceTabs/ResourceTabs')
`;

export const description = `
    Табы с названиями показателей счетчиков
`;

export const code = `
  <ResourceTabs
    tabsArr={ tabsArr }
    active={'Тепло'}
    changeActiveElement={ () => {} }
  />
`;


export const props = {
  tabsArr: {
    type: 'array',
    description: 'Данные для отрисовки компонента, полученные с сервера'
  },
  active: {
    type: 'string',
    description: 'Текущий активный элемент',
    default: 'Тепло'
  }
};

