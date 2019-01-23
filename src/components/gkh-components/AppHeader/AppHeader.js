import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mega } from 'components/gkh-components/AppHeader/Mega';
import { NavBar } from 'components/gkh-components/AppHeader/NavBar';
import { Bell } from 'components/gkh-components/AppHeader/Bell';
import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown';
import styles from 'components/gkh-components/AppHeader/styles.less';


const AppHeader = ({ activeElement: initialActive }) => {
  const [currentActive, setNewActive] = useState(initialActive);

  return (
    <div className={styles.header}>
      <Mega
        initialActive={currentActive}
        setNewActive={setNewActive}
      />
      <NavBar
        initialActive={currentActive}
        setNewActive={setNewActive}
      />
      <div className={styles.rightItems} >
        <span className={styles.bellContainer}>
          <Bell
            initialActive={currentActive}
            setNewActive={setNewActive}
          />
        </span>
        <span className={styles.profileContainer}>
          <ProfileWithDropdown
            initialActive={currentActive}
            setNewActive={setNewActive}
          />
        </span>
      </div>
    </div>
  );
};

AppHeader.propTypes = {
  activeElement: PropTypes.string,
};

export { AppHeader };
