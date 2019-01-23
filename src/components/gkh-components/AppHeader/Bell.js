import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from 'components/gkh-components/AppHeader/styles.less';
import { BellLogo } from 'components/gkh-components/Logo/Logo';


const Bell = ({ initialActive, ...props }) => {
  const [currentActiveHook, setNewActiveHook] = useState(initialActive);
  const currentActive = props.setNewActive ? initialActive : currentActiveHook;
  const setNewActive = props.setNewActive || setNewActiveHook;

  return (
    <div
      className={ classNames([styles.bellAndProfile], { [styles.active]: currentActive === 'Alerts' }) }
      onClick={ () => setNewActive('Alerts') }
    >
      <BellLogo />
    </div>
  );
};

Bell.propTypes = {
  initialActive: PropTypes.string,
  setNewActive: PropTypes.func,
};


export { Bell };
