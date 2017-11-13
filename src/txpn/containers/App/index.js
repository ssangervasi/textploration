import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Defines app state and data store.
import 'txpn/runtime';
import AppLayout from 'txpn/components/app/AppLayout';
import AuthenticatedRoute from 'txpn/containers/AuthenticatedRoute';
import HomePage from 'txpn/containers/HomePage';
import AdventurePage from 'txpn/containers/AdventurePage';
import CreatorPage from 'txpn/containers/CreatorPage';
import DiscoverPage from 'txpn/containers/DiscoverPage';
import AccountPage from 'txpn/containers/AccountPage';
import LoginPage from 'txpn/containers/LoginPage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <Route exact path="/" component={HomePage} />
          <Route path="/adventure" component={AdventurePage} />
          <Route path="/create" component={CreatorPage} />
          <Route path="/discover" component={DiscoverPage} />
          <AuthenticatedRoute path="/account" component={AccountPage} />
          <Route path="/login" component={LoginPage} />
        </AppLayout>
      </BrowserRouter>
    );
  }
}
