import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
