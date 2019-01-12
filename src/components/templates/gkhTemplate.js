import React from 'react';
import gkhStyle from 'templates/gkhTemplates.less';


const gkhTemplate = (GKHComponent) =>
  <div className={gkhStyle.container}>
    <GKHComponent />
  </div>;

export default gkhTemplate;
