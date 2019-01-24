import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { TreeSelect } from 'antd';


const TreeSelector = ({
  title,
  treeData,
  initActiveElement,
  placeholder = 'Выберите единицы',
  customStyle,
  onSearch,
}) => {
  const [currentActive, setNewActive] = useState(initActiveElement);

  return (
    <Fragment>
      <div>{title} </div>
      <TreeSelect
        treeData={treeData}
        value={currentActive}
        onChange={(event) => setNewActive(event)}
        treeCheckable
        searchPlaceholder={placeholder}
        showCheckedStrategy={TreeSelect.SHOW_PARENT}
        onSearch={onSearch}
        style={customStyle}
      />
    </Fragment>
  );
};

TreeSelector.propTypes = {
  title: PropTypes.string,
  treeData: PropTypes.array,
  initActiveElement: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  customStyle: PropTypes.object,
  onSearch: PropTypes.func,
};

export { TreeSelector };
