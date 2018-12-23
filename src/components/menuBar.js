import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class MenuBar extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 250 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['basic']}
        mode="inline"
      >
        <SubMenu key="basic" title="Базовые компоненты">
          <Menu.Item key="pricingTable">Карточки ресурсов</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu key="universal" title="Универсальные компоненты">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default MenuBar;
