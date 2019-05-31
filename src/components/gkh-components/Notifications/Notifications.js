import React from 'react';
import { notification } from 'antd';

const message = ([type, text, title]) => (
  notification[type]({
    message: title,
    description: text,
  })
);

const wrapperMessage = (...props) => (
  <div>
    {message(props)}
  </div>
);


const ErrorMesage = ({
  type,
  text,
  title = 'Упс..!',
}) => (
  wrapperMessage(type, text, title)
);


const WarningMessage = ({
  type,
  text,
  title,
}) => (
  wrapperMessage(type, text, title)
);

const SucessMessage = ({
  type,
  text,
  title = 'Отлично!',
}) => (
  wrapperMessage(type, text, title)
);


export { ErrorMesage, WarningMessage, SucessMessage };
