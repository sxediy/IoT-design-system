import React from 'react';
import propsStyle from 'design-system/templates/propsStyle.less';

const Props = (props) =>
  <div className={propsStyle.container}>
    <p>{props} </p>
  </div >;

export default Props;
