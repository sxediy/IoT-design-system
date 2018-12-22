import { Menu } from "antd"
import PropTypes from 'prop-types';
import styles from "./DoubleMenu.less"

const SubMenu = Menu.SubMenu;

const DoubleMenu = ({ firstLineData, secondLineData }) => { 

  const menuItems = item => {
    return (
        <SubMenu key={`submenu_${item}`} title={ item }>
          {secondLineData(item)}
        </SubMenu>
      )
  }

  return(
    <Menu className={styles.formatsMenu} >
      {
        firstLineData.map( item => menuItems(item) )
      }
    </Menu> 
   )
 }

 
  DoubleMenu.propTypes = {
    firstLineData: PropTypes.array,
    secondLineData: PropTypes.func,
  }

  export default DoubleMenu

  