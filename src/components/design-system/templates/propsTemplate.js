import React from 'react';
import propsStyle from 'design-system/templates/propsStyle.less';

const propsTemplate = (props) =>
  <div className={propsStyle.container}>
    <p>{props} </p>
  </div >;

export default propsTemplate;
