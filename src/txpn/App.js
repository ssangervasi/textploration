// @flow
import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
} from 'react-router-dom';

import UserData, {
  UserDataViewer,
  UserDataProps,
} from './common/components/UserData';
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
            <Route path='/explorer' component={UserDataViewer} />
            <Route path='/adventure' component={UserData.connect(UserAdventure)} />
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
      <li><NavLink to="/explorer">Create Explorer</NavLink></li>
      <li><NavLink to="/adventure">Adventure</NavLink></li>
      <li><NavLink to="/world-list">Explore</NavLink></li>
      <li><NavLink to="/explorer-list">Create</NavLink></li>
      <li><NavLink to="/log-in">Log in</NavLink></li>
    </ul>
  </nav>
);

const AppHeader = () => (
  <div className="app-header">
    <h2>Textploration</h2>
  </div>
);


class UserAdventure extends Component {
  props: UserDataProps;

  render() {
    // TODO: Make this dynamic.
    const explorer = this.props.userData.explorer;
    const world = this.props.userData.worlds[0];
    const region = world.regions[0];
    const room = region.rooms[0];

    return (
      <Adventure
        explorer={explorer}
        world={world}
        region={region}
        room={room}
      />
    );
  }
}

export default App;
