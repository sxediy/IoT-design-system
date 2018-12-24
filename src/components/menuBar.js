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
    console.log('click ', e);
    this.props.changeUIContainer(e.key);
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


const mapDispatchToProps = (dispatch) => (
  {
    changeUIContainer: (activeKey) =>
      dispatch({ type: 'changeUIContainer', payload: { activeKey } }),
  }
);

export default connect(null, mapDispatchToProps)(MenuBar);
