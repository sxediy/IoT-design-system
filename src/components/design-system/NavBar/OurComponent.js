import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { NavBar } from 'components/gkh-components/AppHeader/NavBar';
import { initActiveElement2, navBarElements } from 'components/gkh-components/AppHeader/fakeData';

import * as data from './about';


const OurComponent = () => (
  <NavBar
    initActiveElement={ initActiveElement2 }
    navBarElements={ navBarElements }
  />
);


export default constructFromTemplates(OurComponent, data);
