// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'TreeSelector';

export const importString = `
  import { TreeSelector } from 'components/gkh-components/TreeSelector/TreeSelector'
`;

export const description = `
   Селектор в виде дерева
`;

export const code = `
  <TreeSelector
    title={title}
    treeData={treeData}
    initActiveElement={activeValue}
    placeholder={placeholder}
    customStyle={customStyle}
    onSearch={onSearch}
  />
`;


export const props = {
  title: {
    type: 'string',
    description: 'наименование компонента (здесь это "Фильтры:")'
  },
  treeData: {
    type: 'array',
    description: 'Набор данных, которыми заполняется компонент',
  },
  initActiveElement: {
    type: 'string',
    description: 'Название начального выбранного элемента',
  },
  placeholder: {
    type: 'array',
    description: 'Заполняющий текст (здесь это "Выберите единицы")',
  },
  customStyle: {
    type: 'string',
    description: 'Пользовательские стили',
  },
  onSearch: {
    type: 'function',
    description: 'Включен/отключен поиск',
  }
};

