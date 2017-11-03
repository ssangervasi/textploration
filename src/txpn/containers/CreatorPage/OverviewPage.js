import React from 'react';

import auth from 'txpn/runtime/auth';
import Overview from 'txpn/components/creator/Overview';

export default class OverviewPage extends React.Component {
  render() {
    if (auth.isAuthenticated) {
      return <Overview user={auth.user}/>
    }
    return <AnonymousOverview />
  }
}

const AnonymousOverview = () => (
  <section>
    <h3>You are not logged in.</h3>
    <p>
      Please log in to see your overview and start creating.
    </p>
  </section>
);
