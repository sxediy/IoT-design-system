import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from 'components/gkh-components/AppHeader/styles.less';
import { BellLogo } from 'components/gkh-components/Logo/Logo';


const Bell = ({ setActive, activeNavLink }) =>
  <div
    className={ classNames([styles.bellAndProfile], { [styles.active]: activeNavLink === 'Alerts' }) }
    onClick={ () => setActive('Alerts') }
  >
    <BellLogo />
  </div>;

Bell.propTypes = {
  setActive: PropTypes.func,
  activeNavLink: PropTypes.string,
};


export { Bell };
