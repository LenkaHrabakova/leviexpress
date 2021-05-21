import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { Home } from './components/Home/index';
import { Reservation } from './components/Reservation/index';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Link to="/">Home</Link>
        <Link to="/reservation">Reservation</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/reservation">
            <Reservation />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
