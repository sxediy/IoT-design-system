import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { TreeSelector } from 'components/gkh-components/TreeSelector/TreeSelector';
import {
  title,
  treeData,
  activeValue,
  onChange,
  placeholder,
  customStyle,
  onSearch
} from 'components/gkh-components/TreeSelector/fakeData';

import * as data from './about';


const OurComponent = () =>
  <TreeSelector
    title={title}
    treeData={treeData}
    initActiveElement={activeValue}
    onChange={onChange}
    placeholder={placeholder}
    customStyle={customStyle}
    onSearch={onSearch}
  />;


export default constructFromTemplates(OurComponent, data);
