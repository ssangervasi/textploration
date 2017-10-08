import React from 'react';
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';

import './runtime';
import classy from 'txpn/components/HOCs/classy';
import AdventurePage from 'txpn/components/adventure/AdventurePage';
import CreatePage from 'txpn/components/creator/CreatePage';
import DiscoverContainer from 'txpn/components/world/DiscoverContainer';
import MyAccount from 'txpn/components/user/MyAccount';

export default function App() {
    return (
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    );
}

const AppLayout = () => (
  <div className="app screen">
    <div className="grid-container">
      <AppHeader />
      <AppNav />
    </div>

    <main className="grid-container">
      <Route exact path="/" component={AboutPage} />
      <Route path="/adventure" component={AdventurePage} />
      <Route path="/create" component={CreatePage} />
      <Route path="/discover" component={DiscoverContainer} />
      <Route path="/me" component={MyAccount} />
    </main>
  </div>
);

const AppNav = () => {
  const LI = classy('nav-list__item grid-20 tablet-grid-50 mobile-grid-50')(
    'li'
  );
  return (
    <nav className="app-nav grid-parent grid-70 tablet-grid-60 mobile-grid-100">
      <ul className="nav-list grid-parent">
        <LI>
          <NavLink to="/adventure">Adventure</NavLink>
        </LI>
        <LI>
          <NavLink to="/create">Create</NavLink>
        </LI>
        <LI>
          <NavLink to="/discover">Discover</NavLink>
        </LI>
        <LI>
          <NavLink to="/me">Profile</NavLink>
        </LI>
      </ul>
    </nav>
  );
};

const AppHeader = () => (
  <header className="app-header grid-30 tablet-grid-40 mobile-grid-100">
    <Link to="/">
      <h2 className="title">
        Textploration
        <br />
        <small>A game</small>
      </h2>
    </Link>
  </header>
);

const AboutPage = () => {
  return (
    <section>
      <p>Welcome to Textploration, the sandbox for text-based adventures.</p>
      <p>
        Many features are in development, but why don't you try your first{' '}
        <Link to="/adventure/start">adventure</Link>?
      </p>
      <p>
        Or, start <Link to="/create/help">creating</Link>.
      </p>
    </section>
  );
};
