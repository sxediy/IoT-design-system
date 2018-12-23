import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RouteBar from 'components/routeBar';
import Authorization from 'hoc/authorization';
import { routes } from './routes';
import appStyles from './style.less';


const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => {
        const component = route.isPrivate ? Authorization(route.component) : route.component;
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
        <div className={appStyles.appContainer} >
          <header className={appStyles.header}>
            <RouteBar routes={routes.filter(route => route.isNavBar)}/>
          </header>
          <main className={appStyles.main}>
            {renderSwitch()}
          </main>
          <footer className={appStyles.footer}><p>All rights reserved © 2018</p></footer>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
