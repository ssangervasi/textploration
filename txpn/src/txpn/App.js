import React from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
} from 'react-router-dom';

import './store';
import AdventureContainer from 'txpn/components/adventure/AdventureContainer';
import CreateContainer from 'txpn/components/creator/CreateContainer';
import DiscoverContainer from 'txpn/components/world/DiscoverContainer';
import MyAccount from 'txpn/components/user/MyAccount'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app screen">
          <div className="grid-container">
            <AppHeader />
            <AppNav />
          </div>

          <main>
            <Route exact path='/' component={About} />
            <Route path='/adventure' component={AdventureContainer} />
            <Route path='/create' component={CreateContainer} />
            <Route path='/discover' component={DiscoverContainer} />
            <Route path='/me' component={MyAccount} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const AppNav = () => {
  const itemClassName = 'nav-list__item grid-20 tablet-grid-50 mobile-grid-50';
  return (
    <nav className="app-nav grid-parent grid-70 tablet-grid-60 mobile-grid-100">
      <ul className="nav-list grid-parent">
        <li className={itemClassName}>
          <NavLink to='/adventure'>Adventure</NavLink>
        </li>
        <li className={itemClassName}>
          <NavLink to='/create'>Create</NavLink>
        </li>
        <li className={itemClassName}>
          <NavLink to='/discover'>Discover</NavLink>
        </li>
        <li className={itemClassName}>
          <NavLink to='/me'>Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const AppHeader = () => (
  <header className="app-header grid-30 tablet-grid-40 mobile-grid-100">
    <Link to='/'>
      <h2 className="title">
        Textploration
        <br/>
        <small>A game</small>
      </h2>
    </Link>
  </header>
);

const About = () => {
  return (
    <section>
      <p>
        Welcome to Textploration, the sandbox for text-based adventures.
      </p>
      <p>
        Many features are in development, but why don't you try
        your first <Link to='/adventure/start'>adventure</Link>?
      </p>
    </section>
  );
}
