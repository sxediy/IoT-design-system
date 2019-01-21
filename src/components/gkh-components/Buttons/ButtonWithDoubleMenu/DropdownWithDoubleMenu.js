import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import { DoubleMenu } from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/DoubleMenu';
import styles from 'components/gkh-components/Buttons/Buttons.less';

const DropdownWithDoubleMenu = ({
  getFirstLineData,
  buttonName,
  logo,
  ...linesData,
}) => {
  const renderMenu = (
    <DoubleMenu
      linesData={linesData}
    />
  );

  return (
    <Dropdown
      overlay={renderMenu}
      placement="bottomCenter"
      trigger={['click']}
    >
      <div onClick={getFirstLineData} className={styles.buttonWrapper}>
        {logo}
        <span className={styles.buttonName}>{buttonName}</span>
      </div>
    </Dropdown>
  );
};

DropdownWithDoubleMenu.propTypes = {
  getFirstLineData: PropTypes.func,
  buttonName: PropTypes.string,
  logo: PropTypes.object,
};


export { DropdownWithDoubleMenu };
