
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'SearchBar';

export const importString = `
  import { SearchBar } from 'components/gkh-components/SearchBar/SearchBar'
`;

export const description = `
  Бар из нескольких выпадающих списков и иконок между ними,
  меняющими статус в зависимости от того, выбрано ли значение слева 
`;

export const code = `
  <SearchBar
    displayProp={displayProp}
    initialFirst={initialCity}
    initiaSecond={initialStreet}
    initialThird={initialHouse}
    firstList={cityList}
    secondList={streetList}
    thirdList={houseList}
    firstPlaceholder={cityPlaceholder}
    secondPlaceholder={streetPlaceholder}
    thirdPlaceholder={housePlaceholder}
  />;
`;


export const props = {
  displayProp: {
    type: 'string',
    description: 'Ключ, значение которого показывается в выпадающем списке',
    default: 'name'
  },
  initialFirst: {
    type: 'string',
    description: 'Предварительно выбранный элемент (ключ) первого списка. Параметр необязательный',
  },
  initiaSecond: {
    type: 'string',
    description: 'Предварительно выбранный элемент (ключ) второго списка. Параметр необязательный',
  },
  initialThird: {
    type: 'string',
    description: 'Предварительно выбранный элемент (ключ) третьего списка. Параметр необязательный',
  },
  firstList: {
    type: 'string',
    description: 'Данные для отрисовки компонента, полученные с сервера для первого списка',
  },
  secondList: {
    type: 'string',
    description: 'Данные для отрисовки компонента, полученные с сервера для второго списка',
  },
  thirdList: {
    type: 'string',
    description: 'Данные для отрисовки компонента, полученные с сервера для третьего списка',
  },
  firstPlaceholder: {
    type: 'string',
    description: 'Когда не выбран элемент первого списка - эта надпись',
  },
  secondPlaceholder: {
    type: 'string',
    description: 'Когда не выбран элемент второго списка - эта надпись',
  },
  thirdPlaceholder: {
    type: 'string',
    description: 'Когда не выбран элемент третьего списка - эта надпись',
  }
};
