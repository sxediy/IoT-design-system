import { Dropdown } from "antd"
import ThreeMenu from 'components/Buttons/ButtonWithThreeMenu/ThreeMenu.js'
import styles from 'components/Buttons/Buttons.less'
import PropTypes from 'prop-types';

const DropdownWithMenu = ({ getSecondLineData, buttonName, logo, ...linesData }) => {
  const renderMenu = (
    <ThreeMenu 
      linesData={linesData}
    />
  )

  return (
    <Dropdown
      overlay={renderMenu}
      placement="bottomCenter"
      trigger={['click']}
    >
      <div onClick={getSecondLineData} className={styles.buttonWrapper}>
        {logo}
        <span className={styles.buttonName}>{buttonName}</span>
      </div>
    </Dropdown>
  )
}

DropdownWithMenu.propTypes = {
  getSecondLineData: PropTypes.func,
  linesData: PropTypes.object,
  buttonName: PropTypes.string,
  logo: PropTypes.object,
}


export default DropdownWithMenu