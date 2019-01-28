import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ObjectsLogo, ReportsLogo, UsersLogo, USPDLogo } from 'components/gkh-components/Logo/Logo';
import classNames from 'classnames';
import styles from 'components/gkh-components/AppHeader/styles.less';

// ToDo рефакторинг мапить [Objects', 'Reports', 'Users' , и т.д] - этот массив передавать из data.js аргументом
const NavBar = ({ initActiveElement, setNewActive: setNewActiveProps }) => {
  const [currentActiveHook, setNewActiveHook] = useState(initActiveElement);
  const currentActive = setNewActiveProps ? initActiveElement : currentActiveHook;
  const setNewActive = setNewActiveProps || setNewActiveHook;


  return (
    <div className={styles.items}>

      <div
        className={ classNames([styles.item], { [styles.active]: currentActive === 'Objects' }) }
        onClick={ () => setNewActive('Objects') }
      >
        <ObjectsLogo />
        <div className={ styles.title }>
          Объекты
        </div>
      </div>

      <div
        className={ classNames([styles.item], { [styles.active]: currentActive === 'Reports' }) }
        onClick={ () => setNewActive('Reports') }
      >
        <ReportsLogo />
        <div className={ styles.title }>
          Отчеты
        </div>
      </div>

      <div
        className={ classNames([styles.item], { [styles.active]: currentActive === 'Users' }) }
        onClick={ () => setNewActive('Users') }
      >
        <UsersLogo />
        <div className={ styles.title }>
          Пользователи
        </div>
      </div>

      <div
        className={ classNames([styles.item], { [styles.active]: currentActive === 'USPD' }) }
        onClick={ () => setNewActive('USPD') }
      >
        <USPDLogo />
        <div className={ styles.title }>
          УСПД
        </div>
      </div>

    </div>
  );
};


NavBar.propTypes = {
  initActiveElement: PropTypes.string,
  setNewActive: PropTypes.func,
};


export { NavBar };

