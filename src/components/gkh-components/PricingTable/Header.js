import React from 'react';
import styles from 'components/gkh-components/PricingTable/PricingTable.less';

export const Header = () => (
  <div className={styles.tableTitles}>
    <div>Общедомовые показатели</div>
    <div>Количество помещений</div>
    <div>Разница ОДПУ и ИПУ</div>
    <div></div>
  </div>
);
