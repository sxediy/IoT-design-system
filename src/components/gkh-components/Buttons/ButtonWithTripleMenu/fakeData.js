import { DownloadLogo as logo } from 'components/gkh-components/Logo/Logo';


const firstLineData = ['по всем ресурсам', 'по выбранному ресурсу'];
const secondLineData = ['pdf', 'csv', 'Your exelent format =)'];
const buttonName = 'Выгрузка';
const options = ['общедомовой', 'индивидуальный', 'коммерческий'];
const onSubmit = (...selected) => () => console.log('Отправка данных на сервер', selected);

export { firstLineData, secondLineData, buttonName, logo, options, onSubmit };