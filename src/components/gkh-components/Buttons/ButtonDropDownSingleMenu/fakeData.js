import { BellLogo as LogoComponent } from 'components/gkh-components/Logo/Logo';


const buttonName = 'Кнопочка';
const items = ['кокос', 'яблоко', 'манго'];
const callbackFunction = ({ key }) => (
  console.log('Вы сделали свой выбор или всё же чужой, но при этом ошибочно полагаете, что свой ))', key)
);


export {
  items,
  LogoComponent,
  buttonName,
  callbackFunction
};
