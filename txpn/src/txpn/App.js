// @flow
import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
} from 'react-router-dom';

import AdventureForUser from 'txpn/components/adventure/AdventureForUser';
import ExplorerList from 'txpn/components/explorer/ExplorerList';
import WorldList from 'txpn/components/world/WorldList';
import { UserDataViewer } from 'txpn/components/common/UserData';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app screen">
          <AppHeader />
          <AppNav />

          <main>
            <Route path='/explorer' component={UserDataViewer} />
            <Route path='/adventure' component={AdventureForUser} />
            <Route path='/explorer-list' component={ExplorerList} />
            <Route path='/world-list' component={WorldList} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const AppNav = () => (
  <nav className="app-nav">
    <ul>
      <li><NavLink to='/explorer'>Create Explorer</NavLink></li>
      <li><NavLink to='/adventure'>Adventure</NavLink></li>
      <li><NavLink to='/world-list'>Explore</NavLink></li>
      <li><NavLink to='/explorer-list'>Create</NavLink></li>
      <li><NavLink to='/log-in'>Log in</NavLink></li>
    </ul>
  </nav>
);

const AppHeader = () => (
  <div className="app-header">
    <h2>Textploration</h2>
  </div>
);

export default App;
