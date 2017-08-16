// @flow
import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
} from 'react-router-dom';

import Adventure from 'txpn/components/adventure/Adventure';
import Create from 'txpn/components/creator/Create';
import Discover from 'txpn/components/world/Discover';
import MyAccount from 'txpn/components/user/MyAccount'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app screen">
          <AppHeader />
          <AppNav />

          <main>
            <section>
              <Route exact path='/' component={About} />
              <Route path='/adventure' component={Adventure} />
              <Route path='/create' component={Create} />
              <Route path='/discover' component={Discover} />
              <Route path='/me' component={MyAccount} />
            </section>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const AppNav = () => (
  <nav className="app-nav">
    <ul>
      <li><NavLink to='/create/explorer'>Create Explorer</NavLink></li>
      <li><NavLink to='/adventure'>Adventure</NavLink></li>
      <li><NavLink to='/world-list'>Explore</NavLink></li>
      <li><NavLink to='/me'>My account</NavLink></li>
    </ul>
  </nav>
);

const AppHeader = () => (
  <div className="app-header">
    <h2>
      Textploration
      <br/>
      <small>A game</small>
    </h2>
  </div>
);

const About = () => {
  return (
    <p>
      TODO: Quick-start guide.
    </p>
  );
}