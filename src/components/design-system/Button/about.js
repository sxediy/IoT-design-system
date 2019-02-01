
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'Simple Button';

export const importString = `
  import { Button } from 'components/gkh-components/Buttons/Button/Button';
`;

export const description = `
    Кнопка.
`;

export const code = `
  <Button
    buttonName={ buttonName }
    size={ size }
    background = { background }
    callbackFunction= { callbackFunction }
  />;
`;


export const props = {
  buttonName: {
    type: 'string',
    description: 'Название кнопки',
  },
  size: {
    type: 'function',
    description: 'Размер кнопки',
  },
  background: {
    type: 'string',
    description: 'Цвет фона',
  },
  callbackFunction: {
    type: 'function',
    description: 'Обработчик клика на кнопку',
  }
};

