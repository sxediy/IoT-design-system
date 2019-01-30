// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'PricingTable';

export const importString = `
  import { ResourcesTable } from 'components/gkh-components/PricingTable/PricingTable')
`;

export const description = `
  Таблица вывода основной информации по счетчикам в определенном доме, 
  использующаяся в приложении "ЖКХ".
`;

export const code = `
  <ResourcesTable
    pricingData={ pricingData }
    initActiveElement={ initActiveElement1 }
  />;
`;


export const props = {
  pricingData: {
    type: 'object',
    description: 'Данные для отрисовки компонента, полученные с сервера'
  },
  initActiveElement: {
    type: 'string',
    description: 'Название начальной активной карточки',
    default: 'Тепло'
  }
};

