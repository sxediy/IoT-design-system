import React from 'react';
import codeStyle from 'design-system/templates/codeStyle.less';

const codeTemplate = (code) =>
  <div className={codeStyle.container}>
    <p>{code}</p>
  </div >;

export default codeTemplate;
