import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu } from 'antd';
import styles from './ButtonDropDownSingleMenu.less';


const menu = (callbackFunction, items) => (
  <Menu onClick={callbackFunction}>
    {items.map(item => <Menu.Item key={`${item}`}>{item}</Menu.Item>)}
  </Menu>
);


const ButtonDropDownSingleMenu = ({
  items,
  LogoComponent,
  buttonName,
  callbackFunction
}) => (
  <Dropdown
    overlay={menu(callbackFunction, items)}
    placement="bottomCenter"
  >
    <div className={styles.buttonWrapper}>
      <LogoComponent color={'orange'}/>
      <span className={styles.buttonName}>{buttonName}</span>
    </div>
  </Dropdown>
);

ButtonDropDownSingleMenu.propTypes = {
  items: PropTypes.array,
  LogoComponent: PropTypes.func,
  buttonName: PropTypes.string,
  callbackFunction: PropTypes.func
};


export { ButtonDropDownSingleMenu };
