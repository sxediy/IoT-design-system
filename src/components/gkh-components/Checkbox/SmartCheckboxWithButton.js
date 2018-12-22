import { Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';


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
      const { indeterminate, checkAll, checkedList } = this.state
      const { plainOptions, args, click } = this.props
      
      return (
        <div style={{ padding: '10px' }}>
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
          <CheckboxGroup style={{ padding: '10px' }} options={ plainOptions } value={ checkedList } onChange={ this.onChange } />
          <Button 
            type="primary" 
            onClick={click(checkedList, ...args)}
          >
            Скачать
          </Button>
        </div>
      );
    }

}

SmartCheckboxWithButton.propTypes = {
  args: PropTypes.array,
  click: PropTypes.func,
  plainOptions: PropTypes.array,
  defaultCheckedList: PropTypes.array,
}

export default SmartCheckboxWithButton