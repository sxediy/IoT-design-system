
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'RowTimeFilterWrapper';

export const importString = `
  import { RowTimeFilter } from 'components/gkh-components/RowTimeFilter/RowTimeFilter';
`;

export const description = `
  Компонент, отвечающий за выбор временного отрезка в качестве
  параметра запроса данных на сервер, либо фильтра отображения данных.
`;

export const code = `
  <RowTimeFilter
    initialDateFrom={ initialDateFrom }
    initialDateTo={ initialDateTo }
    today={ today }
    disabledDate={ disabledDate }
    isTSRV= { isTSRV }
  />;
`;


export const props = {
  initialDateFrom: {
    type: 'string',
    description: 'Начальная начальная дата'
  },
  initialDateTo: {
    type: 'string',
    description: 'Начальная конечная дата',
  },
  today: {
    type: 'string',
    description: 'Сегодняшняя дата',
  },
  disabledDate: {
    type: 'string',
    description: 'Дата, до которой можно выбрать значение в календаре ',
  },
  isTSRV: {
    type: 'boolean',
    description: 'Флаг, отвечающий за тип счётчика (ТСРВ или нет)',
  },
};
