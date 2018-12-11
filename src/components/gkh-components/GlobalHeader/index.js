import React, { Component } from 'react';
import { Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider, Tooltip } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import Debounce from 'lodash-decorators/debounce';
import { Link, NavLink } from 'dva/router';
import styles from './index.less';
import menuIcon1 from "icons/menu_icon_01.svg";
import menuIcon2 from "icons/menu_icon_02.svg";
import menuIcon3 from "icons/menu_icon_03.svg";
import mainUspd from "icons/main_uspd.svg";
import alert from "icons/alert_green.svg";
import profile from "icons/profile.svg";
import { clearToken } from "utils/token"
import { clearAuthority } from "utils/authority"
import { reloadAuthorized } from 'utils/Authorized';
//import { megaLogotype } from 'components/Logo/Logo.js'
import mega from "icons/Mega-logotype.svg";


export default class GlobalHeader extends Component {

  logout = () => {
    clearToken()
    clearAuthority()
    reloadAuthorized()
    window.location.replace("/")
  }

  renderMenu = () => {
    return (
      <Menu className={styles.menu}>
        <Menu.Item key="/me/faq">
          <NavLink to="/me/faq" activeClassName={ styles.active } className={ styles.item }>
            Поддержка пользователей
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/me/profile">
          <NavLink to="/me/profile" activeClassName={ styles.active } className={ styles.item }>
            Мой профиль
          </NavLink>
        </Menu.Item>
        <Menu.Item key="exit">
          <div onClick={ this.logout } className={ styles.item }>
            Выход
          </div>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    const {
      currentUser = {},
      collapsed,
      fetchingNotices,
      isMobile,
      megaLogotype,
      onNoticeVisibleChange,
      onMenuClick,
      onNoticeClear,
    } = this.props;

    return (
      <div className={styles.header}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logoWr} key="megaLogotype">
            <div className={styles.logoImg}>
            {/* {megaLogotype} */}
              <svg  viewBox={mega.viewBox} >
                <use xlinkHref={`#${mega.id}`} />
               </svg>
            </div>
          </Link>

          <div className={styles.items}>
            <NavLink to="/objects" activeClassName={ styles.active } className={ styles.item }>
              <svg width="21" height="25" fill="currentColor" viewBox={menuIcon1.viewBox} className={styles.icon} >
                <use xlinkHref={`#${menuIcon1.id}`} />
              </svg>
            	<div className={ styles.title }>
            		Объекты
            	</div>
            </NavLink>
            <NavLink to="/reports" activeClassName={ styles.active } className={ styles.item }>
              <svg width="21" height="25" fill="currentColor" viewBox={menuIcon2.viewBox} className={styles.icon} >
                <use xlinkHref={`#${menuIcon2.id}`} />
              </svg>
              <div className={ styles.title }>
                Отчеты
              </div>
            </NavLink>
            <NavLink to="/users" activeClassName={ styles.active } className={ styles.item }>
              <svg width="21" height="25" fill="currentColor" viewBox={menuIcon3.viewBox} className={styles.icon} >
                <use xlinkHref={`#${menuIcon3.id}`} />
              </svg>
              <div className={ styles.title }>
                Пользователи
              </div>
            </NavLink>
            <NavLink to="/uspd" activeClassName={ styles.active } className={ styles.item }>
              <svg width="21" height="25" fill="currentColor" viewBox={mainUspd.viewBox} className={styles.icon} >
                <use xlinkHref={`#${mainUspd.id}`} />
              </svg>
              <div className={ styles.title }>
                УСПД
              </div>
            </NavLink>
          </div>

          <div className={styles.rightItems}>
            <NavLink to="/notifications" activeClassName={ styles.active } className={ styles.item }>
              <svg width="21" height="25" fill="currentColor" viewBox={alert.viewBox} className={styles.icon} >
                <use xlinkHref={`#${alert.id}`} />
              </svg>
            </NavLink>
            <Dropdown placement="bottomRight" overlay={this.renderMenu()} >
            <NavLink to="/me" activeClassName={ styles.active } className={ styles.item }>
              <svg width="21" height="25" fill="currentColor" viewBox={profile.viewBox} className={styles.icon} >
                <use xlinkHref={`#${profile.id}`} />
              </svg>
            </NavLink>
            </Dropdown>
            {/* <Tooltip title="Посмотреть">
              <a
                target="_blank"
                href="http://pro.ant.design/docs/getting-started"
                rel="noopener noreferrer"
                className={styles.action}
              >
                <Icon type="question-circle-o" />
              </a>
            </Tooltip> */}
          </div>
        </div>
      </div>
    );
  }
}
