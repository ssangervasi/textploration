// @flow
import React, { Component } from 'react';

import { Clock } from './Clock';

import logo from './logo.svg';
import './App.css';

function AppHeader() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppIntro />

        <main>
          <section>
            <Clock/>
          </section>
          <section>
            <Clock options={ {timeZone: 'America/New_York'} } />
          </section>
        </main>
      </div>
    );
  }
}


export default App;
