// В реальности эти данные для компонента получают с сервера

const heat = 'heat';
const pureWater = 'pureWater';
const hotWater = 'hotWater';
const gas = 'gas';
const coldWater = 'coldWater';
const electricity = 'electricity';

const heatRuso = 'Тепло';
const pureWaterRuso = 'Чистая вода';
const hotWaterRuso = 'Горячая вода';
const gasRuso = 'Газ';
const coldWaterRuso = 'Холодная вода';
const electricityRuso = 'Электричество';


const resources = {
  gasRuso: {
    eng: gas,
    typeName: gasRuso,
    title: 'Газ',
    color: '#404d46',
    unit: 'м³',
  },
  heatRuso: {
    eng: heat,
    typeName: heatRuso,
    title: 'Тепло',
    color: '#ffa718',
    unit: 'Гкал',
  },
  pureWaterRuso: {
    eng: pureWater,
    typeName: pureWaterRuso,
    title: 'Чистая вода',
    color: '#99d5f8',
    unit: 'м³',
  },
  hotWaterRuso: {
    eng: hotWater,
    typeName: hotWaterRuso,
    title: 'Горячая вода',
    color: '#f62534',
    unit: 'м³',
  },
  coldWaterRuso: {
    eng: coldWater,
    typeName: coldWaterRuso,
    title: 'Холодная вода',
    color: '#34aaf2',
    unit: 'м³',
  },
  electricityRuso: {
    eng: electricity,
    typeName: electricityRuso,
    title: 'Электричество',
    color: '#b809d4',
    unit: 'кВт*ч',
  },
};

const resourcesValues = Object.values(resources);

export { resourcesValues };
