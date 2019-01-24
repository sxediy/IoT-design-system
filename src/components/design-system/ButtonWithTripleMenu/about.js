
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ButtonWithTripleMenu';

export const importString = `
  import { ButtonWithTripleMenu } from 'components/gkh-components/Buttons/ButtonWithTripleMenu/DropdownWithTripleMenu';
`;

export const description = `
    Кнопка с тройным выпадающим списком
`;

export const code = `
  <DropdownWithTripleMenu
    firstLineData={ firstLineData }
    secondLineData={ secondLineData }
    thirdLine={ (...args) =>
      <SmartCheckboxWithButton
        args={ args }
        callbackFunction={ onSubmit }
        plainOptions={ options }
        defaultCheckedList={ options }
      />
    }
    buttonName={ buttonName }
    logo={ logo }
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
  thirdLine: {
    type: 'function',
    description: 'Компонент SmartCheckboxWithButton',
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

