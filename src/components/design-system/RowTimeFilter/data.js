
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'RowTimeFilter';

export const importString = `
  import { RowTimeFilter } from 'components/gkh-components/RowTimeFilter/RowTimeFilter')
`;

export const description = `
    Фильтр времени
`;

export const code = `
  <RowTimeFilter
    dateFrom={dateFrom}
    dateTo={dateTo}
    setDate={setDate}
    isTSRV={isTSRV}
  />;
`;


export const props = {
  dateFrom: {
    type: 'string',
    description: 'Начальная дата'
  },
  dateTo: {
    type: 'string',
    description: 'Конечная дата',
  },
  setDate: {
    type: 'function',
    description: 'Функция, вызываемая при клике для смены выбранных дат',
  },
  isTSRV: {
    type: 'boolean',
    description: 'Флаг, отвечающий за тип счётчика',
  },
};

