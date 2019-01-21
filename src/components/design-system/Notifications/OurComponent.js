import React, { Fragment } from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { ErrorMesage, WarningMessage, SucessMessage } from 'components/gkh-components/Notifications/Notifications';
import {
  typeError,
  titleError,
  textError,
  typeWarning,
  titleWarning,
  textWarning,
  typeSuccess,
  titleSuccess,
  textSuccess,
} from 'components/gkh-components/Notifications/fakeData';

import * as data from './about';


const OurComponent = () =>
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
  </Fragment>;

export default constructFromTemplates(OurComponent, data);
