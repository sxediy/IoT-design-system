import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { Bell } from 'components/gkh-components/AppHeader/Bell';

import * as data from './data';


const GKHComponent = () =>
  <Bell
    setActiveNavLink= {() => {}}
  />;


export default constructFromTemplates(GKHComponent, data);
