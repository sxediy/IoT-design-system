
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
    buttonName={ '1' }
    size={ 'l' }
    border = {'1px dotted fury'}
    background = { green }
    callbackFunction= { callbackFunction }
  />
  <Button
    buttonName={ '2' }
    size={ 'l' }
    border = {'1px dotted fury'}
    background = { green }
    isDisabled={ true }
    callbackFunction= { callbackFunction }
  />
  <Button
    buttonName={ '3' }
    size={ 's' }
    border = {'1px dotted fury'}
    background = { violet }
    callbackFunction= { callbackFunction }
  />
  <Button
    buttonName={ '4' }
    size={ 's' }
    border = {'1px dotted fury'}
    background = { violet }
    isDisabled={ true }
    callbackFunction= { callbackFunction }
  />
  <Button
    buttonName={ '5' }
    isDarkness= { true }
    background = { freshAsphalt }
    textColor = { fullWhite }
    callbackFunction= { callbackFunction }
  />
  <Button
    buttonName={ '6' }
    isDarkness= { true }
    isDisabled={ true }
    background = { freshAsphalt }
    textColor = { fullWhite }
    callbackFunction= { callbackFunction }
  />
  <Button
    buttonName={ '7' }
    isDarkness= { true }
    border = {'1px dotted fury'}
    background = { fullWhite }
    textColor = { freshAsphalt }
    callbackFunction= { callbackFunction }
  />
  <Button
    buttonName={ '8' }
    isDarkness= { true }
    isDisabled={ true }
    border = {'1px dotted fury'}
    background = { fullWhite }
    textColor = { freshAsphalt }
    callbackFunction= { callbackFunction }
  />
`;


export const props = {
  buttonName: {
    type: 'string',
    description: 'Название кнопки',
  },
  type: {
    type: 'string',
    description: 'атрибут тэга button',
    default: 'submit',
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
    default: '1px solid fullWhite',
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

