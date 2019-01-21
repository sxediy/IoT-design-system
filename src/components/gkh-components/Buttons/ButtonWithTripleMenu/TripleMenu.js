import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'antd';
import styles from 'components/gkh-components/Buttons/ButtonWithTripleMenu/TripleMenu.less';


const { SubMenu } = Menu;

const TripleMenu = ({ linesData }) => {
  const { firstLineData = [], secondLineData = [], thirdLine = () => {} } = linesData;

  const secondMenuItems = (firstitem, seconditem) =>
    <SubMenu key={[seconditem]} title={ seconditem }>
      {thirdLine(firstitem, seconditem)}
    </SubMenu>;


  const firstMenuItems = firstitem =>
    <SubMenu key={[firstitem]} title={ firstitem }>
      {secondLineData.map(seconditem => secondMenuItems(firstitem, seconditem))}
    </SubMenu>;


  return (
    <Menu className={styles.formatsMenu} >
      {firstLineData.map(firstitem => firstMenuItems(firstitem))}
    </Menu>
  );
};


TripleMenu.propTypes = {
  linesData: PropTypes.object,
};

export { TripleMenu };
