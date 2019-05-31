import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as logotypes from 'components/gkh-components/Logo/Logo';
import classNames from 'classnames';
import styles from 'components/gkh-components/AppHeader/styles.less';

const NavBar = ({ initActiveElement, navBarElements, setNewActive: setNewActiveProps }) => {
  const [currentActiveHook, setNewActiveHook] = useState(initActiveElement);
  const currentActive = setNewActiveProps ? initActiveElement : currentActiveHook;
  const setNewActive = setNewActiveProps || setNewActiveHook;


  return (
    <div className={styles.items}>
      {navBarElements.map(element => (
        <div
          key={element.name}
          className={classNames(styles.item, { [styles.active]: currentActive === element.name })}
          onClick={() => setNewActive(element.name)}
        >
          {logotypes[element.logoName]()}
          <div className={styles.title}>{element.title}</div>
        </div>
      ))}
    </div>
  );
};


NavBar.propTypes = {
  initActiveElement: PropTypes.string,
  setNewActive: PropTypes.func,
  navBarElements: PropTypes.array,
};


export { NavBar };
