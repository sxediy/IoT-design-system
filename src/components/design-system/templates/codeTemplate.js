import React from 'react';
import codeStyle from 'design-system/templates/codeStyle.less';

const Code = (code) =>
  <div className={codeStyle.container}>
    <p>{code}</p>
  </div >;

export default Code;
