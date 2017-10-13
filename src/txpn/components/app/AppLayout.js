import React from 'react';

import AppHeader from './AppHeader';

const AppLayout = ({ children }) => (
  <div className="app screen">
    <div className="grid-container">
      <AppHeader />
    </div>

    <main className="grid-container">{children}</main>
  </div>
);

export default AppLayout;
