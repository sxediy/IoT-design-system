import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import classnames from 'classnames';
import styles from './FilteringSelect.less';


const { Option } = Select;

const FilteringSelect = ({
  selected: initialSelected,
  list,
  displayProp = 'name',
  placeholder,
  onChange,
}) => {
  const [currentSelected, setNewSelected] = useState(initialSelected);

  const changeParentState = eventTarget => {
    onChange(eventTarget);
    setNewSelected(eventTarget);
  };

  const changeSelectElement = eventTarget =>
    (onChange ? changeParentState(eventTarget) : setNewSelected(eventTarget));

  return (
    <div className={classnames(styles.searchBar, { [styles.isSelected]: currentSelected })}>
      <Select
        dropdownClassName={styles.dropdown}
        showSearch
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        placeholder={placeholder}
        disabled={Object.keys(list).length === 0}
        value={currentSelected}
        onChange={changeSelectElement}
      >
        {
          Object.keys(list).map(itemName => {
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
  selected: PropTypes.string,
  list: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  displayProp: PropTypes.string,
};

export { FilteringSelect };
