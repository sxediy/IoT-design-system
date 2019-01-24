
const title = 'Фильтры:';

const treeData = [{
  title: 'Энергия',
  value: '0',
  key: '0',
},
{
  title: 'Масса (М, т)',
  value: '1',
  key: '1',
  children: [{
    key: '1-0',
    title: 'Масса теплоносителя через прямой  трубопровод, т',
    value: '1-0',
  }, {
    key: '1-1',
    title: 'Масса теплоносителя через обратный трубопровод, т',
    value: '1-1',
  }]
},
{
  title: 'Температура',
  value: '2',
  key: '2',
  children: [{
    key: '2-0',
    title: 'Температура в прямом трубопроводе, °C',
    value: '2-0',
  }, {
    key: '2-1',
    title: 'Температура в обратном трубопроводе, °C',
    value: '2-1',
  }]
},
{
  title: 'Давление',
  value: '3',
  key: '3',
  children: [{
    key: '3-0',
    title: 'Давление в прямом трубопроводе, Атм/МПа',
    value: '3-0',
  }, {
    key: '3-1',
    title: 'Давление в обратном трубопроводе, Атм/МПа',
    value: '3-1',
  }]
}
];

const initActiveElement = '1-1';
const placeholder = 'Выберите единицы';
const customStyle = {
  width: 500,
  marginLeft: 30,
};
const onSearch = () => false;

export { title, treeData, initActiveElement, placeholder, customStyle, onSearch };
