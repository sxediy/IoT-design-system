import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import * as logotypes from 'components/gkh-components/Logo/Logo';
import layout from './layout.less';

import * as data from './about';


const OurComponent = () =>
  <div className={layout.container}>
    {
      Object.keys(logotypes).map(name =>
        <div key={name} className={layout.item}>{logotypes[name]()}</div>
      )
    }
  </div>;

export default constructFromTemplates(OurComponent, data);
