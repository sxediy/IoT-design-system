import { Menu } from "antd"
import PropTypes from 'prop-types';
import styles from "./ThreeMenu.less"

const SubMenu = Menu.SubMenu;

//универсализировать
const ThreeMenu = ({ linesData }) => {
  const { firstLineData, secondLineData=[], thirdLineData=()=>{} } = linesData
  
  const secondMenuItems = (firstitem, seconditem) => {
    return (
        <SubMenu key={`secondsubmenu_${seconditem}`} title={ seconditem }>
          {thirdLineData(firstitem, seconditem)}
        </SubMenu>
      )
  }

  const firstMenuItems = firstitem => {
    return (
        <SubMenu key={`firstsubmenu_${firstitem}`} title={ firstitem }>
          {secondLineData.map( seconditem => secondMenuItems(firstitem, seconditem) )}
        </SubMenu>
      )
  }

  return(
    <Menu className={styles.formatsMenu} >
      {firstLineData.map( firstitem => firstMenuItems(firstitem) )}
    </Menu> 
   )
 }

 
  ThreeMenu.propTypes = {
    firstLineData: PropTypes.array,
    secondLineData: PropTypes.array,
    thirdLineData: PropTypes.func,
  }

  export default ThreeMenu

  