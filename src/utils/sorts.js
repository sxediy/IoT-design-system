export const sortAscFn = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

const sortByPropertyDescFn = key => (a, b) => {
  if (b[key] > a[key]) {
    return 1;
  }
  if (b[key] < a[key]) {
    return -1;
  }
  return 0;
};

const sortByPropertyAscFn = key => (a, b) => {
  if (b[key] > a[key]) {
    return -1;
  }
  if (b[key] < a[key]) {
    return 1;
  }
  return 0;
};

const sortByPropertyDesc = (data, key) => (
  data
    .slice(0)
    .sort(sortByPropertyDescFn(key))
);

const sortByPropertyAsc = (data, key) => (
  data
    .slice(0)
    .sort(sortByPropertyAscFn(key))
);

/**
 * @param {array} data - массив данных
 * @param {string} key - ключ, по которому доступны значения, по которым  происхоит сортировка
 * @param {string} direction - направление сортировки
 * @param {number} amount - количество элементов, которое остается в отсортированном массиве
 * @return Если data - массив, функция возвращает новый отсортированный массив, исходный не модифицирует.
 */
export const sortByPropertyThenSlice = (data, key, direction = 'desc', amount = data.length ) => {
  if (
    Array.isArray(data) &&
       typeof (key) === 'string' &&
       typeof (direction) === 'string' &&
       typeof (amount) === 'number'
  ) {
    return direction === 'asc' ?
      sortByPropertyAsc(data, key).slice(0, [amount]) :
      sortByPropertyDesc(data, key).slice(0, [amount]);
  }

  return new Error('как минимум один из параметров функции не проходит проверку типов')
};

