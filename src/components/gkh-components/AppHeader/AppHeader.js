import React from 'react';
import styles from './styles.less';
import { MegaLogoInAppHeader } from './MegaLogoWithClick';
import { NavBar } from './NavBar';
import { Bell } from './Bell';
import { ProfileWithDropdown } from './ProfileWithDropdown';


const AppHeader = () => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <MegaLogoInAppHeader />
      <NavBar />
      <div className={styles.rightItems} >
        <Bell />
        <ProfileWithDropdown />
      </div>

    </div>
  </div>
);


export { AppHeader };
