import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { NavBar } from 'components/gkh-components/AppHeader/NavBar';

import * as data from './about';


const OurComponent = () =>
  <NavBar
    activeNavLink='Reports'
    setActiveNavLink= {() => {}}
  />;


export default constructFromTemplates(OurComponent, data);
