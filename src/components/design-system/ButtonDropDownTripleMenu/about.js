
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ButtonDropDownTripleMenu';

export const importString = `
  import { ButtonDropDownTripleMenu } from 
  'components/gkh-components/Buttons/ButtonDropDownTripleMenu/ButtonDropDownTripleMenu';
`;

export const description = `
    Кнопка с тройным выпадающим списком.
`;

export const code = `
  <ButtonDropDownTripleMenu
    firstLineData={ firstLineData }
    secondLineData={ secondLineData }
    thirdLine={ (...args) =>
      <SmartCheckboxWithButton
        args={ args }
        callbackFunction={ onSubmit }
        plainOptions={ options }
        checkboxTitle={ checkboxTitle }
        defaultCheckedList={ options }
      />
    }
    buttonName={ buttonName }
    LogoComponent={ LogoComponent }
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
  thirdLine: {
    type: 'function',
    description: 'Компонент SmartCheckboxWithButton',
  },
  buttonName: {
    type: 'string',
    description: 'Название кнопки',
  },
  LogoComponent: {
    type: 'function',
    description: 'Компонент логотипа/иконки',
  }
};

