import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { NavBar } from 'components/gkh-components/AppHeader/NavBar';

import * as data from './data';


const GKHComponent = () =>
  <NavBar
    activeNavLink='Reports'
    setActiveNavLink= {() => {}}
  />;


export default constructFromTemplates(GKHComponent, data);
