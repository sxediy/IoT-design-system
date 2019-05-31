// В реальности эти данные для компонента получают с сервера

const tabsArr = [
  {
    eng: 'gas',
    typeName: 'Газ',
    title: 'Газ',
    color: '#404d46',
    unit: 'м³',
  },
  {
    eng: 'heat',
    typeName: 'Тепло',
    title: 'Тепло',
    color: '#ffa718',
    unit: 'Гкал',
  },
  {
    eng: 'pureWater',
    typeName: 'Чистая вода',
    title: 'Чистая вода',
    color: '#99d5f8',
    unit: 'м³',
  },
  {
    eng: 'hotWater',
    typeName: 'Горячая вода',
    title: 'Горячая вода',
    color: '#f62534',
    unit: 'м³',
  },
  {
    eng: 'coldWater',
    typeName: 'Холодная вода',
    title: 'Холодная вода',
    color: '#34aaf2',
    unit: 'м³',
  },
  {
    eng: 'electricity',
    typeName: 'Электричество',
    title: 'Электричество',
    color: '#b809d4',
    unit: 'кВт*ч',
  },
];

const initActiveElement = 'Горячая вода';


export { tabsArr, initActiveElement };
