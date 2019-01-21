import React from 'react';
import PropTypes from 'prop-types';
import alert from 'icons/alert_green.svg';
import classNames from 'classnames';
import styles from 'components/gkh-components/AppHeader/styles.less';


const Bell = ({ setActive, activeNavLink }) =>
  <div
    className={ classNames([styles.bellAndProfile], { [styles.active]: activeNavLink === 'Alerts' }) }
    onClick={ () => setActive('Alerts') }
  >
    <svg width='21' height='25' fill='currentColor' viewBox={alert.viewBox} className={styles.icon} >
      <use xlinkHref={`#${alert.id}`} />
    </svg>
  </div>;

Bell.propTypes = {
  setActive: PropTypes.func,
  activeNavLink: PropTypes.string,
};


export { Bell };
