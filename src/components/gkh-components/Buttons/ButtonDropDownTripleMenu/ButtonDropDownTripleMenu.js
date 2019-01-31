import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'antd';
import { TripleMenu } from 'components/gkh-components/Menu/TripleMenu';
import styles from './ButtonDropDownTripleMenu.less';

const ButtonDropDownTripleMenu = ({
  buttonName,
  LogoComponent,
  ...linesData,
}) => {
  const renderMenu = (
    <TripleMenu
      linesData={ linesData }
    />
  );

  return (
    <Dropdown
      overlay={ renderMenu }
      placement="bottomCenter"
      trigger={ ['click'] }
    >
      <div className={styles.buttonWrapper}>
        <LogoComponent />
        <span className={styles.buttonName}>{buttonName}</span>
      </div>
    </Dropdown>
  );
};

ButtonDropDownTripleMenu.propTypes = {
  buttonName: PropTypes.string,
  LogoComponent: PropTypes.func,
  linesData: PropTypes.object,
};


export { ButtonDropDownTripleMenu };
