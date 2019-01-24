
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'RowTimeFilterWrapper';

export const importString = `
  import { RowTimeFilterWrapper } from 'components/gkh-components/RowTimeFilter/RowTimeFilterWrapper';
`;

export const description = `
    Фильтр времени
`;

export const code = `
  <RowTimeFilterWrapper
    initialDateFrom={ initialDateFrom }
    initialDateTo={ initialDateTo }
    isTSRV={ isTSRV }
  />
`;


export const props = {
  initialDateFrom: {
    type: 'string',
    description: 'Начальная дата'
  },
  initialDateTo: {
    type: 'string',
    description: 'Конечная дата',
  },
  isTSRV: {
    type: 'boolean',
    description: 'Флаг, отвечающий за тип счётчика',
  },
};

