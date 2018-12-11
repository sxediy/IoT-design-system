import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Bar = (props) => (
  <nav className='gkh-bar'>
    {props.routes.map(route =>
      <NavLink exact={route.isExact} activeClassName='active' key={route.path} to={route.path}>{route.name}</NavLink>
    )}
  </nav>
);

export default Bar;

Bar.propTypes = {
  routes: PropTypes.array,
};
