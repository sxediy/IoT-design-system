import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown';

import * as data from './data';


const GKHComponent = () =>
  <ProfileWithDropdown
    activeNavLink='Reports'
    setActiveNavLink= {() => {}}
  />;


export default constructFromTemplates(GKHComponent, data);
