import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => {
        const component = route.page;
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
