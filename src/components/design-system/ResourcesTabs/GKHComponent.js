import React from 'react';
import PropTypes from 'prop-types';
import constructFromTemplates from 'services/constructFromTemplates';

import { ResourceTabs } from 'components/gkh-components/ResourceTabs/ResourceTabs';
import { tabsArr } from 'components/gkh-components/ResourceTabs/data';


import * as data from './data';


const GKHComponent = () =>
  <ResourceTabs
    tabsArr={ tabsArr }
    active={'Тепло'}
    changeActiveElement={ () => {} }
  />;

GKHComponent.propTypes = {
  tabsArr: PropTypes.array,
  active: PropTypes.string,
  changeActiveElement: PropTypes.func,
};

export default constructFromTemplates(GKHComponent, data);
