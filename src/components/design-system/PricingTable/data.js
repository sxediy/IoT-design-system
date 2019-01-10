
export const title = 'PricingTable Cards';

export const importString = `
  import { Cards as ResourcesTable } from 'components/gkh-components/PricingTable/Cards')
`;

export const description = `
    Этот компонент Этот компонент Этот компонент
    Этот компонент 
    Этот компонент 
    Этот компонент от компонент 
    Этот компонент 
`;

export const code = 'какой-нибудь код/ Найти решение для раскраски';


export const props = {
  pricingData: {
    type: 'object',
    description: 'описание объекта pricingData'
  },
  changeActiveColumn: {
    type: 'function',
    description: 'по клику мышки меняет активный элемент, применяя к нему свой стиль'
  },
  activeResourceType: {
    type: 'string',
    description: 'название выбранного ресурса',
    default: 'Тепло'
  }
};

