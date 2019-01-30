
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'Notifications';

export const importString = `
  import { ErrorMesage, WarningMessage, SucessMessage } from 'components/gkh-components/Notifications/Notifications')
`;

export const description = `
  Разного рода уведомления в виде всплывающих сообщений (ошибки, предупреждения, уведомления об успешных операциях).
`;

export const code = `
  <Fragment>
    <ErrorMesage
      type={ typeError }
      title={ titleError }
      text={ textError }
    />
    <WarningMessage
      type={ typeWarning }
      title={ titleWarning }
      text={ textWarning }
    />
    <SucessMessage
      type={ typeSuccess }
      title={ titleSuccess }
      text={ textSuccess }
    />
  </Fragment>
`;


export const props = {
  type: {
    type: 'string',
    description: 'Тип сообщения'
  },
  title: {
    type: 'string',
    description: 'Заголовок сообщения'
  },
  text: {
    type: 'string',
    description: 'Текст сообщения',
  },
};

