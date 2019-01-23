import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import profile from 'icons/profile.svg';
import { renderMenu } from 'components/gkh-components/AppHeader/renderMenu';
import styles from 'components/gkh-components/AppHeader/styles.less';


const ProfileWithDropdown = ({ initialActive, ...props }) => {
  const [currentActiveHook, setNewActiveHook] = useState(initialActive);
  const currentActive = props.setNewActive ? initialActive : currentActiveHook;
  const setNewActive = props.setNewActive || setNewActiveHook;

  return (
    <Dropdown placement='bottomRight' overlay={ renderMenu() } >
      <div
        className={ classNames([styles.bellAndProfile], { [styles.active]: currentActive === 'Profile' }) }
        onClick={ () => setNewActive('Profile') }
      >
        <svg width='21' height='25' fill='currentColor' viewBox={profile.viewBox} className={styles.icon} >
          <use xlinkHref={`#${profile.id}`} />
        </svg>
      </div>
    </Dropdown>
  );
};

ProfileWithDropdown.propTypes = {
  initialActive: PropTypes.string,
  setNewActive: PropTypes.func,
};


export { ProfileWithDropdown };
