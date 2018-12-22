import { Dropdown } from "antd"
import DoubleMenu from 'components/Buttons/ButtonWithDoubleMenu/DoubleMenu.js'
import styles from 'components/Buttons/Buttons.less'
import PropTypes from 'prop-types';

const DropdownWithDoubleMenu = ({ getFirstLineData, firstLineData, secondLineData, buttonName, logo }) => {
  const renderMenu = (
    <DoubleMenu 
      firstLineData={firstLineData}
      secondLineData={secondLineData}
    />
  )

  return (
    <Dropdown
      overlay={renderMenu}
      placement="bottomCenter"
      trigger={['click']}
    >
      <div onClick={getFirstLineData} className={styles.buttonWrapper}>
        {logo}
        <span className={styles.buttonName}>{buttonName}</span>
      </div>
    </Dropdown>
  )
}

DropdownWithDoubleMenu.propTypes = {
  getFirstLineData: PropTypes.func,
  firstLineData: PropTypes.array,
  secondLineData: PropTypes.func,
  buttonName: PropTypes.string,
  logo: PropTypes.object,
}


export default DropdownWithDoubleMenu