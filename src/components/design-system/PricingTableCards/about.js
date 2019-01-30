// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'PricingTable Cards';

export const importString = `
  import { Cards } from 'components/gkh-components/PricingTable/Cards')
`;

export const description = `
  Компонент карточки с краткими сведениями показателей счетчика.
`;

export const code = `
  <Cards
    pricingData={ pricingData }
    initActiveElement={ initActiveElement2 }
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

