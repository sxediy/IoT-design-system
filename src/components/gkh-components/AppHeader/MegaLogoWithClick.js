import React from 'react';
import PropTypes from 'prop-types';
import { MegaLogoType } from 'components/gkh-components/Logo/Logo';
import styles from './styles.less';


const MegaLogoInAppHeader = ({ setActive }) =>
  <div
    className={styles.logoWr} key='logo'
    onClick={ () => setActive('Objects') }
  >
    <div className={styles.logoImg} >
      <MegaLogoType />
    </div>
  </div>;


MegaLogoInAppHeader.propTypes = {
  setActive: PropTypes.func,
};


export { MegaLogoInAppHeader };

