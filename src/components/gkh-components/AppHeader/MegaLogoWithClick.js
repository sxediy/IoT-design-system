import React from 'react';
import PropTypes from 'prop-types';
import mega from 'icons/Mega-logotype.svg';
import styles from './styles.less';


const MegaLogoWithClick = ({ setActive }) =>
  <div
    className={styles.logoWr} key='logo'
    onClick={ () => setActive('Objects') }
  >
    <div className={styles.logoImg} >
      <svg viewBox={mega.viewBox} >
        <use xlinkHref={`#${mega.id}`} />
      </svg>
    </div>
  </div>;


MegaLogoWithClick.propTypes = {
  setActive: PropTypes.func,
};


export { MegaLogoWithClick };

