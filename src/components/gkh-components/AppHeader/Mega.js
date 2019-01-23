import React from 'react';
import PropTypes from 'prop-types';
import { MegaLogo } from 'components/gkh-components/Logo/Logo';
import styles from 'components/gkh-components/AppHeader/styles.less';


const Mega = ({ setActive }) =>
  <div
    className={styles.logoWr} key='logo'
    onClick={ () => setActive('Objects') }
  >
    <div className={styles.logoImg} >
      <MegaLogo />
    </div>
  </div>;


Mega.propTypes = {
  setActive: PropTypes.func,
};


export { Mega };

