import React from 'react'
import {Select} from 'antd'
import { div } from 'gl-matrix/src/gl-matrix/vec4';
import styles from './index.less';

const {Option} = Select

let counter = 0
const namePr = 'qwejkbflbauf__react_uniq_select'

export default ({selected, list, onChange, placeholder, displayProp, ...rest}) => {
  const idName = namePr + ++counter
  return (
    <div id={idName} style={{position: 'relative'}}>
      <Select dropdownClassName={styles.dr} getPopupContainer={() => document.getElementById(idName)} showSearch filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} placeholder={placeholder} disabled={Object.keys(list).length === 0} value={selected} onChange={onChange} {...rest}>
        {
          Object.keys(list).map( itemName => {
            const item = list[itemName]
            return (
              <Option key={itemName} value={itemName}>{ item[displayProp || 'name'] }</Option>
            )
          })
        }
      </Select>
    </div>
  );
};
