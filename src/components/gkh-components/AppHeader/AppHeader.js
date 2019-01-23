import React from 'react';
import { Mega } from 'components/gkh-components/AppHeader/Mega';
import { NavBar } from 'components/gkh-components/AppHeader/NavBar';
import { Bell } from 'components/gkh-components/AppHeader/Bell';
import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown';
import styles from 'components/gkh-components/AppHeader/styles.less';


const AppHeader = () => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <Mega />
      <NavBar />
      <div className={styles.rightItems} >
        <span className={styles.bellContainer}>
          <Bell />
        </span>
        <span className={styles.profileContainer}>
          <ProfileWithDropdown />
        </span>
      </div>

    </div>
  </div>
);


export { AppHeader };
