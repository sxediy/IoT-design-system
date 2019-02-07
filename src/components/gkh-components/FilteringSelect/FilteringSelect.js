import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import classnames from 'classnames';
import styles from './FilteringSelect.less';


const { Option } = Select;

const FilteringSelect = ({
  initialSelected,
  list,
  onChange,
  placeholder,
  displayProp = 'name',
  ...rest
}) => {
  const [currentSelected, setNewSelected] = useState(initialSelected);
  return (
    <div className={classnames(styles.searchBar, { [styles.isSelected]: currentSelected })}>
      <Select
        dropdownClassName={styles.dropdown}
        showSearch
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        placeholder={placeholder}
        disabled={Object.keys(list).length === 0}
        value={currentSelected}
        onChange={(eventTarget) => setNewSelected(eventTarget)}
        {...rest}
      >
        {
          Object.keys(list).map(itemName => {
            console.log('list', list);
            const item = list[itemName];
            return (
              <Option
                key={itemName}
                value={itemName}
              >
                {item[displayProp]}
              </Option>
            );
          })
        }
      </Select>
    </div>
  );
};


FilteringSelect.propTypes = {
  initialSelected: PropTypes.string,
  list: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  displayProp: PropTypes.string,
};

export { FilteringSelect };
