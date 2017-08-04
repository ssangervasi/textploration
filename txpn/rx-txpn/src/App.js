// @flow
import React, { Component } from 'react';

import {
  // BrowserRouter,
  Link,
  Route,
} from 'react-router-dom';

import { Explorer } from 'txpn-core';

import { Clock } from './Clock';
import { ExplorerDetail } from './ExplorerDetail';

import './App.css';

function AppHeader() {
  return (
    <div className="App-header">
      <h2>Welcome to Textploration</h2>
      <nav>
        <ul>
          <li><Link to='/intro'>Intro</Link></li>
          <li><Link to='/explorer'>Create Explorer</Link></li>
          <li><Link to='/clock'>Clock</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function AppIntro() {
  return (
    <p className="App-intro">
      It's goin down.
    </p>
  );
}

function CreateExplorer() {
  const explorer: Explorer = new Explorer();
  return (
    <section>
      <ExplorerDetail explorer={explorer}/>
    </section>
  );
}

function ClockDemo() {
  return (
    <section>
      <Clock options={{ timeZone: 'America/New_York' }} />
    </section>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />

        <main>
          <Route path='/intro' component={AppIntro} />
          <Route path='/explorer' component={CreateExplorer} />
          <Route path='/clock' component={ClockDemo} />
        </main>
      </div>
    );
  }
}


export default App;
