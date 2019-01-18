
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ButtonWithDoubleMenu';

export const importString = `
  import { DropdownWithDoubleMenu } from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/DropdownWithMenu';
`;

export const description = `
    Кнопка с двухуровневым выпадающим списком
`;

export const code = `
  <DropdownWithDoubleMenu
    getFirstLineData={getFirstLineData}
    firstLineData={firstLineData}
    secondLineData={secondLineData}
    buttonName={buttonName}
    logo={logo}
  />
`;


export const props = {
  getFirstLineData: {
    type: 'function',
    description: 'Получение данных для первого уровня выпадающего списка'
  },
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
  }
};

