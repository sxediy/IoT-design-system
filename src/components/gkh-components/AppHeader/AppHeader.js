import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';

import classNames from 'classnames';
import menuIcon1 from 'icons/menu_icon_01.svg';
import menuIcon2 from 'icons/menu_icon_02.svg';
import menuIcon3 from 'icons/menu_icon_03.svg';
import mainUspd from 'icons/main_uspd.svg';
import alert from 'icons/alert_green.svg';
import profile from 'icons/profile.svg';
import mega from 'icons/Mega-logotype.svg';


import styles from './styles.less';
import { renderMenu } from './renderMenu';


const AppHeader = ({ activeNavLink, setActiveNavLink }) => (
  <div className={styles.header}>
    <div className={styles.inner}>

      <div
        className={styles.logoWr} key='logo'
        onClick={ () => setActiveNavLink('Objects') }
      >
        <div className={styles.logoImg} >
          <svg viewBox={mega.viewBox} >
            <use xlinkHref={`#${mega.id}`} />
          </svg>
        </div>
      </div>

      <div className={styles.items}>

        <div
          className={ classNames([styles.item], { [styles.active]: activeNavLink === 'Objects' }) }
          onClick={ () => setActiveNavLink('Objects') }
        >
          <svg width='21' height='25' fill='currentColor' viewBox={menuIcon1.viewBox} className={styles.icon} >
            <use xlinkHref={`#${menuIcon1.id}`} />
          </svg>
          <div className={ styles.title }>
              Объекты
          </div>
        </div>

        <div
          className={ classNames([styles.item], { [styles.active]: activeNavLink === 'Reports' }) }
          onClick={ () => setActiveNavLink('Reports') }
        >
          <svg width='21' height='25' fill='currentColor' viewBox={menuIcon2.viewBox} className={styles.icon} >
            <use xlinkHref={`#${menuIcon2.id}`} />
          </svg>
          <div className={ styles.title }>
            Отчеты
          </div>
        </div>

        <div
          className={ classNames([styles.item], { [styles.active]: activeNavLink === 'Users' }) }
          onClick={ () => setActiveNavLink('Users') }
        >
          <svg width='21' height='25' fill='currentColor' viewBox={menuIcon3.viewBox} className={styles.icon} >
            <use xlinkHref={`#${menuIcon3.id}`} />
          </svg>
          <div className={ styles.title }>
            Пользователи
          </div>
        </div>

        <div
          className={ classNames([styles.item], { [styles.active]: activeNavLink === 'USPD' }) }
          onClick={ () => setActiveNavLink('USPD') }
        >
          <svg width='21' height='25' fill='currentColor' viewBox={mainUspd.viewBox} className={styles.icon} >
            <use xlinkHref={`#${mainUspd.id}`} />
          </svg>
          <div className={ styles.title }>
            УСПД
          </div>
        </div>

      </div>

      <div className={styles.rightItems} >

        <div
          className={ classNames([styles.item], { [styles.active]: activeNavLink === 'Alerts' }) }
          onClick={ () => setActiveNavLink('Alerts') }
        >
          <svg width='21' height='25' fill='currentColor' viewBox={alert.viewBox} className={styles.icon} >
            <use xlinkHref={`#${alert.id}`} />
          </svg>
        </div>

        <Dropdown placement='bottomRight' overlay={ renderMenu() } >
          <div
            className={ classNames([styles.item], { [styles.active]: activeNavLink === 'Profile' }) }
            onClick={ () => setActiveNavLink('Profile') }
          >
            <svg width='21' height='25' fill='currentColor' viewBox={profile.viewBox} className={styles.icon} >
              <use xlinkHref={`#${profile.id}`} />
            </svg>
          </div>
        </Dropdown>

      </div>

    </div>
  </div>
);

AppHeader.propTypes = {
  activeNavLink: PropTypes.string,
  setActiveNavLink: PropTypes.func,
};

export { AppHeader };
