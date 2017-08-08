// @flow
import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router-dom';

import Clock from './common/Clock';
import Adventure from './oldDesign/Adventure';
import ExplorerList from './oldDesign/ExplorerList';
import WorldList from './oldDesign/WorldList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app screen">
          <AppHeader />
          <AppNav />

          <main>
            <Route path='/intro' component={AppIntro} />
            <Route path='/adventure' component={Adventure} />
            <Route path='/explorer-list' component={ExplorerList} />
            <Route path='/world-list' component={WorldList} />
            <Route path='/clock' component={ClockDemo} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const AppHeader = () => (
  <div className="app-header">
    <h2>Welcome to Textploration</h2>
  </div>
);

const AppNav = () => (
  <nav className="app-nav">
    <ul>
      <li><Link to="/intro">Intro</Link></li>
      <li><Link to="/explorer">Create Explorer</Link></li>
      <li><Link to="/adventure">Adventure</Link></li>
      <li><Link to="/world-list">Explore</Link></li>
      <li><Link to="/explorer-list">Create</Link></li>
      <li><Link to="/log-in">Log in</Link></li>
      <li><Link to="/clock">Clock</Link></li>
    </ul>
  </nav>
);

const AppIntro = () => (
  <p className="app-intro">
    It's goin down.
  </p>
);

const ClockDemo = () => (
  <section>
    <Clock options={{ timeZone: 'America/New_York' }} />
  </section>
);

export default App;
