import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './components/frontpage/portfolio';
import Navbar from './components/navbar';
import Footer from './components/footer';

import './styles/App.scss';
import Resources from './components/resources/resources';
import About from './components/aboutus/about';

function App() {
  return (
    <div className="main">
      <Navbar/>

      <Switch>
        <Route exact path="/" >
          <Portfolio/>
        </Route>
        <Route exact path="/resources" >
          <Resources/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
