import React from 'react';
import titleStyle from 'design-system/templates/titleStyle.less';

const Title = (title, importString, description) =>
  <div className={titleStyle.container}>
    <h2 className={titleStyle.title}>{title}</h2>
    <code className={titleStyle.code}>{importString}</code>
    <p className={titleStyle.description}>{description}</p>
  </div >;

export default Title;
