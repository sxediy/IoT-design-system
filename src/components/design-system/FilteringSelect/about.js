
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'FilteringSelect';

export const importString = `
  import { FilteringSelect } from 'components/gkh-components/FilteringSelect/FilteringSelect'
`;

export const description = `
   Селектор с фильтром
`;

export const code = `
  <FilteringSelect
    initialSelected={initialSelected}
    list={cityList}
    placeholder={placeholder}
    displayProp={displayProp}
  />;
`;


export const props = {
  initialSelected: {
    type: 'string',
    description: 'Предварительно выбранный элемент(ключ). Параметр необязательный'
  },
  list: {
    type: 'object',
    description: 'Данные для отрисовки компонента, полученные с сервера'
  },
  placeholder: {
    type: 'string',
    description: 'Когда не выбран элемент - эта надпись',
  },
  displayProp: {
    type: 'string',
    description: 'Ключ, значение которого показывается в выпадающем списке',
  }
};
