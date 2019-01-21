
const choisedBefore = ['по всем ресурсам', 'pdf'];
const options = ['общедомовой', 'индивидуальный', 'коммерческий'];
const onSubmit = (...selected) => () => console.log('Отправка данных на сервер', selected);

export { choisedBefore, options, onSubmit };
