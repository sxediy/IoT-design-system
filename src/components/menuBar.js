import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const { SubMenu } = Menu;

class MenuBar extends React.Component {
  static propTypes = {
    changeUIContainer: PropTypes.func,
  };

  handleClick = (e) => {
    console.log('clickOnMenuBar ', e);
    this.props.changeUIContainer(e.key);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ flexGrow: 1 }}
        defaultSelectedKeys={['pricingTable']}
        defaultOpenKeys={['universal']}
        mode="inline"
      >
        <SubMenu key="basic" title="Базовые компоненты">
          <Menu.Item key="resourcesTabs">Табы ресурсов</Menu.Item>
          <Menu.Item key="counterTabs">Табы счётчиков</Menu.Item>
          <Menu.Item key="pricingTableCards">Карточки ресурсов</Menu.Item>
          <Menu.Item key="resourceNameAndUnit">Ресурсы</Menu.Item>
          <Menu.Item key="appHeaderNavBar">Верхняя панель навигации</Menu.Item>
          <Menu.Item key="appHeaderBell">Звоночек</Menu.Item>
          <Menu.Item key="appHeaderProfile">Иконка профиля с дропдауном</Menu.Item>
          <Menu.Item key="notifications">Уведомления всплывающие</Menu.Item>
        </SubMenu>
        <SubMenu key="universal" title="Уникальные компоненты">
          <Menu.Item key="pricingTable">Таблица ресурсов</Menu.Item>
          <Menu.Item key="appHeader">Верхняя панель приложения</Menu.Item>
          <Menu.Item key="rowTimeFilter">Фильтр времени</Menu.Item>
          <Menu.Item key="buttonWithDoubleMenu">Кнопка с двойным выпадающим списком</Menu.Item>
          <Menu.Item key="buttonWithTripleMenu">Кнопка с тройным выпадающим списком</Menu.Item>
          <Menu.Item key="smartCheckboxWithButton">Чекбокс с кнопкой</Menu.Item>
          <Menu.Item key="treeSelector">Селектор в виде дерева</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}


const mapDispatchToProps = (dispatch) => (
  {
    changeUIContainer: (activeNameOfComponent) =>
      dispatch({ type: 'changeUIContainer', payload: { activeNameOfComponent } }),
  }
);

export default connect(null, mapDispatchToProps)(MenuBar);
