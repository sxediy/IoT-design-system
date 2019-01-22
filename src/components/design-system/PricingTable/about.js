// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'PricingTable Cards';

export const importString = `
  import { ResourcesTable } from 'components/gkh-components/PricingTable/PricingTable')
`;

export const description = `
   Таблица с данными показателей счётчика
`;

export const code = `
  <ResourcesTable
    pricingData={pricingData}
    activeElement={'Тепло'}
  />;
`;


export const props = {
  pricingData: {
    type: 'object',
    description: 'описание объекта pricingData'
  },
  activeElement: {
    type: 'string',
    description: 'название выбранного ресурса',
    default: 'Тепло'
  }
};

