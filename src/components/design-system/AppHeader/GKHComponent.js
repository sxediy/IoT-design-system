import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { AppHeader } from 'components/gkh-components/AppHeader/AppHeader';

import * as data from './data';


const GKHComponent = () =>
  <AppHeader
    activeNavLink='Reports'
    setActiveNavLink= {() => {}}
  />;


export default constructFromTemplates(GKHComponent, data);
