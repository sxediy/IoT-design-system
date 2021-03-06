
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'CounterTabs';

export const importString = `
  import { CounterTabs } from 'components/gkh-components/CounterTabs/CounterTabs')
`;

export const description = `
  Компонент, отвечающий за переключение между информацией счетчиков, 
  которые установлены в одном помещении или привязаны к одному устройству передачи данных.
`;

export const code = `
  <CounerTabs
    counters={ counters }
    initActiveElement={ initActiveElement }
  />;
`;


export const props = {
  counters: {
    type: 'object',
    description: 'Данные для отрисовки компонента, полученные с сервера'
  },
  initActiveElement: {
    type: 'string',
    description: 'Название начального активного таба',
  }
};
