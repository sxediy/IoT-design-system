import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import { Button } from 'components/gkh-components/Buttons/Button/Button';
import { warmRed, mandarin } from 'src/colors';


const CheckboxGroup = Checkbox.Group;

const SmartCheckboxWithButton = ({
  defaultCheckedList,
  plainOptions,
  args,
  callbackFunction,
  styleContainer,
  checkboxTitle,
}) => {
  console.log('checkboxTitle', checkboxTitle);
  const [currentCheckedList, setNewCheckedList] = useState(defaultCheckedList);
  const [currentIndeterminate, setNewIndeterminate] = useState(true);
  const [currentCheckAll, setNewCheckAll] = useState(false);

  const onChange = (checkedList) => {
    setNewCheckedList(checkedList);
    setNewIndeterminate(!!checkedList.length && (checkedList.length < plainOptions.length));
    setNewCheckAll(checkedList.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setNewCheckedList(e.target.checked ? plainOptions : []);
    setNewIndeterminate(false);
    setNewCheckAll(e.target.checked);
  };

  return (
    <div style={{ padding: '10px', ...styleContainer }}>
      <div style={{ padding: '10px 0 10px 30px', width: '200px' }}>
        <Checkbox
          indeterminate={ currentIndeterminate }
          onChange={ onCheckAllChange }
          checked={ currentCheckAll }
        >
          {checkboxTitle}
        </Checkbox>
      </div>
      <br />
      <CheckboxGroup
        style={{ padding: '10px' }}
        options={ plainOptions }
        value={ currentCheckedList }
        onChange={ onChange }
      />
      <Button
        buttonName={ 'Скачать' }
        customHoverBackground={ warmRed }
        customPressBackground={ mandarin }
        size={'s'}
        background = { warmRed }
        callbackFunction={callbackFunction(currentCheckedList, ...args)}
      >
      </Button>
    </div>
  );
};

SmartCheckboxWithButton.propTypes = {
  args: PropTypes.array,
  callbackFunction: PropTypes.func,
  plainOptions: PropTypes.array,
  checkboxTitle: PropTypes.string,
  defaultCheckedList: PropTypes.array,
  styleContainer: PropTypes.object,
};

export default SmartCheckboxWithButton;
