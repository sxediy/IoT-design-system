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
        style={{ width: 250, flexGrow: 1 }}
        defaultSelectedKeys={['pricingTable']}
        defaultOpenKeys={['universal']}
        mode="inline"
      >
        <SubMenu key="basic" title="Базовые компоненты">
          {/* <Menu.Item key="resourcesTabs">Табы ресурсов</Menu.Item> */}
        </SubMenu>
        <SubMenu key="universal" title="Уникальные компоненты">
          <Menu.Item key="pricingTable">Карточки ресурсов</Menu.Item>
          <Menu.Item key="resourcesTabs">Табы ресурсов</Menu.Item>
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
