import React from 'react';
import gkhStyle from 'design-system/templates/gkhTemplates.less';


const GKHContainer = (GKHComponent) =>
  <div className={gkhStyle.container}>
    <GKHComponent />
  </div>;

export default GKHContainer;
