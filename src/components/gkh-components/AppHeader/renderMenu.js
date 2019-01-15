import React from 'react';
import { Menu } from 'antd';
import styles from './styles.less';

const renderMenu = () =>
  (
    <Menu className={styles.menu}>
      <Menu.Item key="/me/faq">
        <div className= { styles.item }>
          Поддержка пользователей
        </div>
      </Menu.Item>
      <Menu.Item key="/me/profile">
        <div className={ styles.item }>
          Мой профиль
        </div>
      </Menu.Item>
      <Menu.Item key="exit">
        <div className={ styles.item }>
          Выход
        </div>
      </Menu.Item>
    </Menu>
  );

export { renderMenu };