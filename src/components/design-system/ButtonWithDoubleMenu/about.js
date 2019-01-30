
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ButtonWithDoubleMenu';

export const importString = `
  import { DropdownWithDoubleMenu } from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/DropdownWithMenu';
`;

export const description = `
    Кнопка с двойным выпадающим списком.
`;

export const code = `
  <DropdownWithDoubleMenu
    firstLineData={ firstLineData }
    secondLineData={ secondLineData }
    buttonName={ buttonName }
    logo={ logo }
    callbackFunction={ callbackFunction }
  />
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
  logo: {
    type: 'string',
    description: 'Логотип/иконка',
  },
  callbackFunction: {
    type: 'function',
    description: 'Функция обратного вызова, которая сработает после выбора элементов выпадающего списка',
  }
};

