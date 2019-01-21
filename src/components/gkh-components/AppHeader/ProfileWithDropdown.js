import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import profile from 'icons/profile.svg';
import { renderMenu } from 'components/gkh-components/AppHeader/renderMenu';
import styles from 'components/gkh-components/AppHeader/styles.less';


const ProfileWithDropdown = ({ setActive, activeNavLink }) =>
  <Dropdown placement='bottomRight' overlay={ renderMenu() } >
    <div
      className={ classNames([styles.bellAndProfile], { [styles.active]: activeNavLink === 'Profile' }) }
      onClick={ () => setActive('Profile') }
    >
      <svg width='21' height='25' fill='currentColor' viewBox={profile.viewBox} className={styles.icon} >
        <use xlinkHref={`#${profile.id}`} />
      </svg>
    </div>
  </Dropdown>;

ProfileWithDropdown.propTypes = {
  setActive: PropTypes.func,
  activeNavLink: PropTypes.string,
};


export { ProfileWithDropdown };
