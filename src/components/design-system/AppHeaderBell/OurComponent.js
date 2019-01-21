import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { Bell } from 'components/gkh-components/AppHeader/Bell';

import * as data from './data';


const OurComponent = () =>
  <div style={{ marginLeft: 'auto', marginRight: '10%' }}>
    <Bell
      setActiveNavLink= {() => {}}
    />
  </div>;


export default constructFromTemplates(OurComponent, data);
