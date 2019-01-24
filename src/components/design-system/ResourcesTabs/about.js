
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
    initActiveElement={ initActiveElement }
  />
`;


export const props = {
  tabsArr: {
    type: 'array',
    description: 'Данные для отрисовки компонента, полученные с сервера'
  },
  initActiveElement: {
    type: 'string',
    description: 'Название начального активного таба',
    default: 'Тепло'
  }
};

