import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import styles from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/DoubleMenu.less';

const { SubMenu } = Menu;

const DoubleMenu = ({ linesData, callbackFunction }) => {
  const { firstLineData, secondLineData } = linesData;

  const firstMenuItems = (firstitem) =>
    <SubMenu key={[firstitem]} title={firstitem}>
      {secondLineData.map(
        seconditem =>
          <Menu.Item key={[seconditem]}>
            {seconditem}
          </Menu.Item>)
      }
    </SubMenu>;

  return (
    <Menu
      className={styles.formatsMenu}
      onClick={callbackFunction}
    >
      {
        firstLineData.map((firstitem) => firstMenuItems(firstitem))
      }
    </Menu>
  );
};

DoubleMenu.propTypes = {
  linesData: PropTypes.object,
  callbackFunction: PropTypes.func,
};


export { DoubleMenu };
