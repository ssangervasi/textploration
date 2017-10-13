import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from 'txpn/runtime/auth';

export default class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
  };

  logIn = () => {
    auth.logIn().then(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { fromLocation = { pathname: '/' } } = this.props.location.state;
    console.log('LoginPage.render', fromLocation);
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
