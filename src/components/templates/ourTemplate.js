import React from 'react';
import ourStyle from 'templates/ourTemplates.less';


const ourTemplate = (OurComponent) => (
  <div className={ourStyle.container}>
    <OurComponent />
  </div>
);

export default ourTemplate;
