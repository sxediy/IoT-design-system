import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import { DoubleMenu } from 'components/gkh-components/Menu/DoubleMenu';
import styles from './ButtonDropDownDoubleMenu.less';

const ButtonDropDownDoubleMenu = ({
  getFirstLineData,
  buttonName,
  LogoComponent,
  callbackFunction,
  ...linesData,
}) => {
  const renderMenu = (
    <DoubleMenu
      linesData={linesData}
      callbackFunction={callbackFunction}
    />
  );

  return (
    <Dropdown
      overlay={renderMenu}
      placement="bottomCenter"
      trigger={['click']}
    >
      <div onClick={getFirstLineData} className={styles.buttonWrapper}>
        <LogoComponent />
        <span className={styles.buttonName}>{buttonName}</span>
      </div>
    </Dropdown>
  );
};

ButtonDropDownDoubleMenu.propTypes = {
  getFirstLineData: PropTypes.func,
  buttonName: PropTypes.string,
  LogoComponent: PropTypes.func,
  callbackFunction: PropTypes.func
};


export { ButtonDropDownDoubleMenu };
