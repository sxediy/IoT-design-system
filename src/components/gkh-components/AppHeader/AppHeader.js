import React from 'react';
import styles from './styles.less';
import { MegaLogoWithClick } from './MegaLogoWithClick';
import { NavBar } from './NavBar';
import { Bell } from './Bell';
import { ProfileWithDropdown } from './ProfileWithDropdown';


const AppHeader = () => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <MegaLogoWithClick />
      <NavBar />
      <div className={styles.rightItems} >
        <Bell />
        <ProfileWithDropdown />
      </div>

    </div>
  </div>
);


export { AppHeader };
