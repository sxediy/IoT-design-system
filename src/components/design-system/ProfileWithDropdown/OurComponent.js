import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown';
import { profileElements } from 'components/gkh-components/AppHeader/fakeData';

import * as data from './about';


const OurComponent = () => (
  <div style={{ marginLeft: 'auto' }}>
    <ProfileWithDropdown
      profileElements={ profileElements }
    />
  </div>
);


export default constructFromTemplates(OurComponent, data);
