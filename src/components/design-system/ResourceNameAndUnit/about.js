
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ResourceNameAndUnit';

export const importString = `
  import { ResourceNameAndUnit } from 'components/gkh-components/ResourceNameAndUnit/ResourceNameAndUnit')
`;

export const description = `
  Шапки таблиц с названиями и единицами измерения ресурсов.
`;

export const code = `
  <ResourceNameAndUnit
    resourcesValues= { resourcesValues }
  />;
`;


export const props = {
  resourcesValues: {
    type: 'array',
    description: 'Данные для отрисовки компонента, полученные с сервера'
  },
};
