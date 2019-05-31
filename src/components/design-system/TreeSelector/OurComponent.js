import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { TreeSelector } from 'components/gkh-components/TreeSelector/TreeSelector';
import {
  title,
  treeData,
  initActiveElement,
  placeholder,
  customStyle,
  onSearch
} from 'components/gkh-components/TreeSelector/fakeData';

import * as data from './about';


const OurComponent = () => (
  <TreeSelector
    title={ title }
    treeData={ treeData }
    initActiveElement={ initActiveElement }
    placeholder={ placeholder }
    customStyle={ customStyle }
    onSearch={ onSearch }
  />
);


export default constructFromTemplates(OurComponent, data);
