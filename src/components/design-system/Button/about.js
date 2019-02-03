
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
    isDarkness= { isDarkness }
    isDisabled={ isDisabled }
    background = { background }
    boxShadow= { boxShadow }
    border={ border }
    textColor = { textColor }
    textSize = { textSize }
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
    default: 'm',
  },
  isDarkness: {
    type: 'boolean',
    // eslint-disable-next-line
    description: 'Светлая или темная тема приложения (влияет на цвет зажатой и "выключенной" кнопки, прозрачность цвета текста выключенной кнопки)',
    default: 'false'
  },
  isDisabled: {
    type: 'boolean',
    description: 'Является ли кнопка неактивным элементом страницы, исходя из бизнес логики ?',
    default: 'false',
  },
  background: {
    type: 'string',
    description: 'Цвет фона',
  },
  boxShadow: {
    type: 'string',
    description: 'Стиль тени',
    default: 'none',
  },
  border: {
    type: 'string',
    description: 'Стиль границы кнопки',
    default: 'none',
  },
  textColor: {
    type: 'string',
    description: 'Цвет текста',
    default: 'fullWhite',
  },
  textSize: {
    type: 'string',
    description: 'Размер текста',
    default: '15px'
  },
  callbackFunction: {
    type: 'function',
    description: 'Обработчик клика на кнопку',
  }
};

