import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import { DoubleMenu } from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/DoubleMenu';
import styles from 'components/gkh-components/Buttons/Buttons.less';

const DropdownWithDoubleMenu = ({
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

DropdownWithDoubleMenu.propTypes = {
  getFirstLineData: PropTypes.func,
  buttonName: PropTypes.string,
  LogoComponent: PropTypes.func,
  callbackFunction: PropTypes.func
};


export { DropdownWithDoubleMenu };
