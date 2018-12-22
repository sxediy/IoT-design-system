import { Dropdown, Menu } from "antd"
import styles from 'components/Buttons/Buttons.less'

const menu = (click, items) => (
    <Menu onClick={click}>
      {items.map(item => <Menu.Item key={`${item}`}>{item}</Menu.Item>)}
    </Menu>
  )

export const SingleMenuButton = ({ buttonName, logo, items, click }) =>
        <Dropdown
            overlay={menu(click, items)}
            placement="bottomCenter"
        >
        <div className={styles.buttonWrapper}>
            {logo}
            <span className={styles.buttonName}>{buttonName}</span>
        </div>
        </Dropdown>





