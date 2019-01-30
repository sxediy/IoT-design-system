
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'SmartCheckboxWithButton';

export const importString = `
  import { SmartCheckboxWithButton } from 'components/gkh-components/Checkbox/SmartCheckboxWithButton';
`;

export const description = `
   "Умный" чекбокс с кнопкой.
`;

export const code = `
  <SmartCheckboxWithButton
    args={ choisedBefore }
    callbackFunction={ onSubmit }
    plainOptions={ options }
    defaultCheckedList={ options }
    styleContainer={ { width: '250px', boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)' } }
  />
`;


export const props = {
  args: {
    type: 'array',
    description: 'Список выбранных ранее значений',
  },
  callbackFunction: {
    type: 'function',
    description: 'Функция обратного вызова, срабатывающая при клике на кнопку',
  },
  plainOptions: {
    type: 'array',
    description: 'Полный набор опций',
  },
  defaultCheckedList: {
    type: 'array',
    description: 'Списк выбранных уже по умолчанию опций',
  },
  styleContainer: {
    type: 'object',
    description: 'Стиль контейнера для позиционирования "на месте"',
  }
};

