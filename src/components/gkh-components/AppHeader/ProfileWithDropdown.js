import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import { ProfileLogo } from 'components/gkh-components/Logo/Logo';
import { renderMenu } from 'components/gkh-components/AppHeader/renderMenu';
import styles from 'components/gkh-components/AppHeader/styles.less';


const ProfileWithDropdown = ({ initActiveElement, setNewActive: setNewActiveProps }) => {
  const [currentActiveHook, setNewActiveHook] = useState(initActiveElement);
  const currentActive = setNewActiveProps ? initActiveElement : currentActiveHook;
  const setNewActive = setNewActiveProps || setNewActiveHook;

  return (
    <Dropdown placement='bottomRight' overlay={ renderMenu() } >
      <div
        className={ classNames([styles.bellAndProfile], { [styles.active]: currentActive === 'Profile' }) }
        onClick={ () => setNewActive('Profile') }
      >
        <ProfileLogo />
      </div>
    </Dropdown>
  );
};

ProfileWithDropdown.propTypes = {
  initActiveElement: PropTypes.string,
  setNewActive: PropTypes.func,
};


export { ProfileWithDropdown };
