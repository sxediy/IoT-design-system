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
    changeActiveElement={() => {}}
    activeResourceType={'Тепло'}
  />;
`;


export const props = {
  pricingData: {
    type: 'object',
    description: 'описание объекта pricingData'
  },
  changeActiveElement: {
    type: 'function',
    description: 'по клику мышки меняет активный элемент, применяя к нему свой стиль'
  },
  activeResourceType: {
    type: 'string',
    description: 'название выбранного ресурса',
    default: 'Тепло'
  }
};

