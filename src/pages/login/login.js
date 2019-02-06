import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button } from 'components/gkh-components/Buttons/Button/Button';
import { green } from 'src/colors';
import styles from './login.less';

const FormItem = Form.Item;


const NormalLoginForm = ({
  form: { getFieldDecorator },
  form: { validateFields },
  isAuthorized,
  logIn,
  error
}) => {
  if (isAuthorized) return <Redirect to='/' />;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, { userName, password }) => {
      if (!err) {
        console.table([`Вы только что ввели логин: ${userName}`, `Вы только что ввели пароль: ${password}`]);
        logIn(userName, password);
      }
    });
  };

  const InputUsername = (
    <Input
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder="Username"
    />
  );

  const DecoratorUsername = getFieldDecorator(
    'userName', { rules: [{ required: true, message: 'Please input your username!' }] }
  )(InputUsername);

  const InputPassword = (
    <Input
      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
      type="password"
      placeholder="Password"
    />
  );

  const DecoratorPassword = getFieldDecorator(
    'password', { rules: [{ required: true, message: 'Please input your Password!' }] }
  )(InputPassword);


  return (
    <Form onSubmit={handleSubmit} className={styles.loginForm}>
      <FormItem>
        {DecoratorUsername}
      </FormItem>
      <FormItem>
        {DecoratorPassword}
      </FormItem>
      <FormItem>
        <Button
          buttonName={ 'Log in' }
          background = { green }
          className={styles.loginFormButton}
        >
        </Button>
      </FormItem>
      <div className={styles.errorMessage} hidden={!error}>
        {error}
      </div>
    </Form>
  );
};

NormalLoginForm.propTypes = {
  form: PropTypes.object,
  isAuthorized: PropTypes.bool,
  logIn: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = ({ auth }) => (
  {
    isAuthorized: Boolean(auth.username),
    error: auth.errorMessage
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logIn: (username, password) => dispatch({ type: 'LOG_IN', payload: { username, password } }),
  }
);

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
