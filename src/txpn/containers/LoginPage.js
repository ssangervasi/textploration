import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from 'txpn/runtime/auth';

export default class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
  };

  componentDidMount() {
    if (auth.isAuthenticated) {
      this.redirect();
    }
  }

  redirect() {
    this.setState({ redirectToReferrer: true });
  }

  /** Event handlers */

  logIn = () => {
    auth.authenticate().then(() => {
      this.redirect();
    });
  };

  getLocationState() {
    const location = this.props.location;
    if (location == null || location.state == null) {
      return { fromLocation: { pathname: '/' } };
    }
    return location.state;
  }

  render() {
    const { fromLocation } = this.getLocationState();
    if (this.state.redirectToReferrer) {
      return <Redirect to={fromLocation} />;
    }
    return (
      <section>
        <h2>You must log in to access {fromLocation.pathname}</h2>
        <button className="button" onClick={this.logIn}>
          Log in
        </button>
      </section>
    );
  }
}
