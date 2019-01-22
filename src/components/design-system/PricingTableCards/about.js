// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'PricingTable Cards';

export const importString = `
  import { Cards } from 'components/gkh-components/PricingTable/Cards')
`;

export const description = `
   Карточки с данными показателей счётчика
`;

export const code = `
  <Cards
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

