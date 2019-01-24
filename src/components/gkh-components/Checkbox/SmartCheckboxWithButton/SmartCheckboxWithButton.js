import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Button } from 'antd';


const CheckboxGroup = Checkbox.Group;

class SmartCheckboxWithButton extends React.Component {
    state = {
      checkedList: this.props.defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    };

    onChange = (checkedList) => {
      this.setState({
        checkedList,
        indeterminate: !!checkedList.length && (checkedList.length < this.props.plainOptions.length),
        checkAll: checkedList.length === this.props.plainOptions.length,
      });
    }

    onCheckAllChange = (e) => {
      this.setState({
        checkedList: e.target.checked ? this.props.plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    }

    render() {
      const { indeterminate, checkAll, checkedList } = this.state;
      const {
        plainOptions,
        args,
        callbackFunction,
        styleContainer,
      } = this.props;

      return (
        <div style={{ padding: '10px', ...styleContainer }}>
          <div style={{ padding: '10px 0 10px 30px', width: '200px' }}>
            <Checkbox
              indeterminate={ indeterminate }
              onChange={ this.onCheckAllChange }
              checked={ checkAll }
            >
                Выбрать все
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup
            style={{ padding: '10px' }}
            options={ plainOptions }
            value={ checkedList }
            onChange={ this.onChange }
          />
          <Button
            type="primary"
            onClick={callbackFunction(checkedList, ...args)}
          >
            Скачать
          </Button>
        </div>
      );
    }
}

SmartCheckboxWithButton.propTypes = {
  args: PropTypes.array,
  callbackFunction: PropTypes.func,
  plainOptions: PropTypes.array,
  defaultCheckedList: PropTypes.array,
  styleContainer: PropTypes.object,
};

export default SmartCheckboxWithButton;
