
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ButtonDropDownSingleMenu';

export const importString = `
  import { ButtonDropDownSingleMenu } from 
  'components/gkh-components/Buttons/ButtonDropDownSingleMenu/ButtonDropDownSingleMenu';
`;

export const description = `
    Кнопка с выпадающим списком.
`;

export const code = `
  <ButtonDropDownSingleMenu
    items={ items }
    LogoComponent={ LogoComponent }
    buttonName={ buttonName }
    callbackFunction={ callbackFunction }
  />;
`;


export const props = {
  items: {
    type: 'array',
    description: 'Список опций выпадающего меню',
  },
  LogoComponent: {
    type: 'function',
    description: 'Компонент логотипа/иконки',
  },
  buttonName: {
    type: 'string',
    description: 'Название кнопки',
  },
  callbackFunction: {
    type: 'function',
    description: 'Обработчик клика на одну из опций выпадающего списка',
  }
};

