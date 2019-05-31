
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ButtonDropDownDoubleMenu';

export const importString = `
  import { ButtonDropDownDoubleMenu } from 
  'components/gkh-components/Buttons/ButtonDropDownDoubleMenu/ButtonDropDownDoubleMenu';
`;

export const description = `
    Кнопка с двойным выпадающим списком.
`;

export const code = `
  <ButtonDropDownDoubleMenu
    firstLineData={ firstLineData }
    secondLineData={ secondLineData }
    buttonName={ buttonName }
    LogoComponent={ LogoComponent }
    callbackFunction={ callbackFunction }
  />;
`;


export const props = {
  firstLineData: {
    type: 'array',
    description: 'Данные для первого уровня выпадающего списка',
  },
  secondLineData: {
    type: 'array',
    description: 'Данные для второго уровня выпадающего списка',
  },
  buttonName: {
    type: 'string',
    description: 'Название кнопки',
  },
  LogoComponent: {
    type: 'function',
    description: 'Компонент логотипа/иконки',
  },
  callbackFunction: {
    type: 'function',
    description: 'Функция обратного вызова, которая сработает после выбора элементов выпадающего списка',
  }
};
