import { DownloadLogo as LogoComponent } from 'components/gkh-components/Logo/Logo';


const firstLineData = ['по всем ресурсам', 'по выбранному ресурсу'];
const secondLineData = ['pdf', 'csv', 'Your exelent format =)'];
const buttonName = 'Выгрузка';
const callbackFunction = ({ keyPath }) => console.log('callbackFunction Выбранные элементы', keyPath);


export { firstLineData, secondLineData, buttonName, LogoComponent, callbackFunction };
