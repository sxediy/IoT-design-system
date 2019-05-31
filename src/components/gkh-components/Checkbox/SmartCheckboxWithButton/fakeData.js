
const choisedBefore = ['по всем ресурсам', 'pdf'];
const options = ['общедомовой', 'индивидуальный', 'коммерческий'];
const onSubmit = (...selected) => () => (
  console.log(
    'callbackFunction: список элементов, включающий выбранные в других компонентах по пути сюда',
    selected
  )
);

const checkboxTitle = 'Выбрать всё';

export {
  choisedBefore,
  options,
  onSubmit,
  checkboxTitle
};
