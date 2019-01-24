import React, { useState } from 'react';
import PropTypes from 'prop-types';

import menuIcon1 from 'icons/menu_icon_01.svg';
import menuIcon2 from 'icons/menu_icon_02.svg';
import menuIcon3 from 'icons/menu_icon_03.svg';
import mainUspd from 'icons/main_uspd.svg';
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
        <svg width='21' height='25' fill='currentColor' viewBox={menuIcon1.viewBox} className={styles.icon} >
          <use xlinkHref={`#${menuIcon1.id}`} />
        </svg>
        <div className={ styles.title }>
          Объекты
        </div>
      </div>

      <div
        className={ classNames([styles.item], { [styles.active]: currentActive === 'Reports' }) }
        onClick={ () => setNewActive('Reports') }
      >
        <svg width='21' height='25' fill='currentColor' viewBox={menuIcon2.viewBox} className={styles.icon} >
          <use xlinkHref={`#${menuIcon2.id}`} />
        </svg>
        <div className={ styles.title }>
          Отчеты
        </div>
      </div>

      <div
        className={ classNames([styles.item], { [styles.active]: currentActive === 'Users' }) }
        onClick={ () => setNewActive('Users') }
      >
        <svg width='21' height='25' fill='currentColor' viewBox={menuIcon3.viewBox} className={styles.icon} >
          <use xlinkHref={`#${menuIcon3.id}`} />
        </svg>
        <div className={ styles.title }>
          Пользователи
        </div>
      </div>

      <div
        className={ classNames([styles.item], { [styles.active]: currentActive === 'USPD' }) }
        onClick={ () => setNewActive('USPD') }
      >
        <svg width='21' height='25' fill='currentColor' viewBox={mainUspd.viewBox} className={styles.icon} >
          <use xlinkHref={`#${mainUspd.id}`} />
        </svg>
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

