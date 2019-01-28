import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const mapStateToProps = ({ auth }) => ({ isAuthorized: Boolean(auth.username) });

const Athorization = (WrappedComponent) => {
  const WithAuthorization = (props) =>
    (props.isAuthorized ? <WrappedComponent {...props}/> : <Redirect to='/login' />);

  WithAuthorization.propTypes = {
    isAuthorized: PropTypes.bool
  };

  return connect(mapStateToProps)(WithAuthorization);
};


export default Athorization;
