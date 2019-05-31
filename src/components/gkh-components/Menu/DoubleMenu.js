import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';


const { SubMenu } = Menu;

const DoubleMenu = ({ linesData, callbackFunction }) => {
  const { firstLineData, secondLineData } = linesData;

  const firstMenuItems = (firstitem) => (
    <SubMenu key={[firstitem]} title={firstitem}>
      {secondLineData.map(
        seconditem => (
          <Menu.Item key={[seconditem]}>
            {seconditem}
          </Menu.Item>)
      )}
    </SubMenu>
  );

  return (
    <Menu
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
