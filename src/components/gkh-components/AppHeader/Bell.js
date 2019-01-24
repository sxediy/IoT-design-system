import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from 'components/gkh-components/AppHeader/styles.less';
import { BellLogo } from 'components/gkh-components/Logo/Logo';


const Bell = ({ initActiveElement, setNewActive: setNewActiveProps }) => {
  const [currentActiveHook, setNewActiveHook] = useState(initActiveElement);
  const currentActive = setNewActiveProps ? initActiveElement : currentActiveHook;
  const setNewActive = setNewActiveProps || setNewActiveHook;

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
  initActiveElement: PropTypes.string,
  setNewActive: PropTypes.func,
};


export { Bell };
