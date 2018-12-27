import React from 'react';
import titleStyle from 'design-system/titleStyle.less';

const Title = () =>
  <div className={titleStyle.container}>
    <h2 className={titleStyle.title}> PricingTable Cards </h2>
    <code className={titleStyle.code}>
      {`
      import { Cards as ResourcesTable } from 'components/gkh-components/PricingTable/Cards')
      `}
    </code>
    <p className={titleStyle.description}>
      Этот компонент отображает разницу и объем
      Этот компонент отображает разницу и объем
      Этот компонент отображает разницу и объем
      Этот компонент отображает разницу и объем
    </p>
  </div >;

export default Title;
