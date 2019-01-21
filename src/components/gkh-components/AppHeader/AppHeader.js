import React from 'react';
import { MegaLogoInAppHeader } from 'components/gkh-components/AppHeader/MegaLogoWithClick';
import { NavBar } from 'components/gkh-components/AppHeader/NavBar';
import { Bell } from 'components/gkh-components/AppHeader/Bell';
import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown';
import styles from 'components/gkh-components/AppHeader/styles.less';


const AppHeader = () => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <MegaLogoInAppHeader />
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
