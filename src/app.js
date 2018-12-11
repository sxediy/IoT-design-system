import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes';
import Bar from './components/bar';
import Authorization from './hoc/authorization';

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
      <Redirect from='*' to='/news' />
    </Switch>
  );

  return (
    <Router>
      <React.Fragment>
        <div className='app-container' >
          <header className='header'></header>
          <main className='main'>
            <section className='gkh-container'>
              <Bar routes={routes.filter(route => route.isNavBar)}/>
              <aside className='gkh-componentst'>
                {renderSwitch()}
              </aside>
            </section>
          </main>
          <footer className='footer'></footer>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
