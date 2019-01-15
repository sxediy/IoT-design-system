import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Authorization from 'services/authorization';
import { routes } from './routes';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => {
        const component = route.isPrivate ? Authorization(route.page) : route.page;
        return (
          <Route
            key={route.path}
            exact={route.isExact}
            path={route.path}
            component={component}
          />
        );
      })}
      <Redirect from='*' to='/' />
    </Switch>
  );

  return (
    <Router>
      <React.Fragment>
        {renderSwitch()}
      </React.Fragment>
    </Router>
  );
};

export default App;
