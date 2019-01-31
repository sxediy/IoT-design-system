import React from 'react';
import { Menu } from 'antd';
import styles from 'components/gkh-components/AppHeader/styles.less';

const renderMenu = (list) =>
  <Menu className={styles.menu}>
    {list.map(item =>
      <Menu.Item key={item}>
        <div className= { styles.item }>
          {item}
        </div>
      </Menu.Item>
    )}
  </Menu>;


export { renderMenu };
