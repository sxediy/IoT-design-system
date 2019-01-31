import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mega } from 'components/gkh-components/AppHeader/Mega';
import { NavBar } from 'components/gkh-components/AppHeader/NavBar';
import { Bell } from 'components/gkh-components/AppHeader/Bell';
import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown';
import styles from 'components/gkh-components/AppHeader/styles.less';


const AppHeader = ({ initActiveElement, navBarElements, profileElements }) => {
  const [currentActive, setNewActive] = useState(initActiveElement);

  return (
    <div className={styles.header}>
      <Mega
        initActiveElement={currentActive}
        setNewActive={setNewActive}
      />
      <NavBar
        initActiveElement={currentActive}
        setNewActive={setNewActive}
        navBarElements={ navBarElements }
      />
      <div className={styles.rightItems} >
        <span className={styles.bellContainer}>
          <Bell
            initActiveElement={currentActive}
            setNewActive={setNewActive}
          />
        </span>
        <span className={styles.profileContainer}>
          <ProfileWithDropdown
            initActiveElement={currentActive}
            setNewActive={setNewActive}
            profileElements={ profileElements }
          />
        </span>
      </div>
    </div>
  );
};

AppHeader.propTypes = {
  initActiveElement: PropTypes.string,
  navBarElements: PropTypes.array,
  profileElements: PropTypes.array,
};

export { AppHeader };
