
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'CounterTabs';

export const importString = `
  import { CounterTabs } from 'components/gkh-components/CounterTabs/CounterTabs')
`;

export const description = `
    Табы с названиями счетчиков
`;

export const code = `
  <CounerTabs
    counters={ counters }
    initActiveElement={ activeKey }
  />;
`;


export const props = {
  counters: {
    type: 'object',
    description: 'Данные для отрисовки компонента, полученные с сервера'
  },
  initActiveElement: {
    type: 'string',
    description: 'Ключ(название) счётчика активного таба',
  }
};

