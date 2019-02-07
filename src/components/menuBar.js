import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { connect } from 'react-redux';

const { SubMenu } = Menu;

const MenuBar = ({ activeNameOfComponent, changeUIContainer }) => {
  const handleClick = (e) => {
    console.log('clickOnMenuBar ', e);
    changeUIContainer(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ flexGrow: 1 }}
      defaultSelectedKeys={[activeNameOfComponent]}
      defaultOpenKeys={['basic']}
      mode="inline"
    >
      <SubMenu key="basic" title="Базовые компоненты">
        <Menu.Item key="resourcesTabs">Табы ресурсов</Menu.Item>
        <Menu.Item key="counterTabs">Табы счётчиков</Menu.Item>
        <Menu.Item key="resourceNameAndUnit">Ресурсы</Menu.Item>
        <Menu.Item key="bell">Звоночек</Menu.Item>
        <Menu.Item key="notifications">Уведомления всплывающие</Menu.Item>
        <Menu.Item key="logotypes">Набор логотипов и иконок</Menu.Item>
        <Menu.Item key="button">Кнопка</Menu.Item>
        <Menu.Item key="filteringSelect">Селектор с фильтрацией</Menu.Item>
      </SubMenu>
      <SubMenu key="universal" title="Уникальные компоненты">
        <Menu.Item key="pricingTable">Таблица ресурсов</Menu.Item>
        <Menu.Item key="pricingTableCards">Карточки ресурсов</Menu.Item>
        <Menu.Item key="appHeader">Верхняя панель приложения</Menu.Item>
        <Menu.Item key="navBar">Верхняя панель навигации</Menu.Item>
        <Menu.Item key="profileWithDropdown">Иконка профиля с дропдауном</Menu.Item>
        <Menu.Item key="rowTimeFilter">Фильтр времени</Menu.Item>
        <Menu.Item key="buttonDropDownSingleMenu">Кнопка с выпадающим списком</Menu.Item>
        <Menu.Item key="buttonDropDownDoubleMenu">Кнопка с двойным выпадающим списком</Menu.Item>
        <Menu.Item key="buttonDropDownTripleMenu">Кнопка с тройным выпадающим списком</Menu.Item>
        <Menu.Item key="smartCheckboxWithButton">Чекбокс с кнопкой</Menu.Item>
        <Menu.Item key="treeSelector">Селектор с древовидной структурой</Menu.Item>
        <Menu.Item key="searchBar">Бар из выпадающих списков и иконок</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

MenuBar.propTypes = {
  changeUIContainer: PropTypes.func,
  activeNameOfComponent: PropTypes.string,
};


const mapDispatchToProps = (dispatch) => (
  {
    changeUIContainer: (activeNameOfComponent) =>
      dispatch({ type: 'changeUIContainer', payload: { activeNameOfComponent } }),
  }
);


export default connect(null, mapDispatchToProps)(MenuBar);

