import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Authorization from 'hoc/authorization';
import { routes } from './routes';
import styles from './app.less';


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
        <main className={styles.app}>
          {renderSwitch()}
        </main>
      </React.Fragment>
    </Router>
  );
};

export default App;
