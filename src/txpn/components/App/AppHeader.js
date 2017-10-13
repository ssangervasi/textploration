import React from 'react';
import { Link } from 'react-router-dom';

import { unsemanticGrid } from 'txpn/utils';
import classy from 'txpn/components/HOCs/classy';

import AppNav from './AppNav';

const Header = classy('app-header', unsemanticGrid(30, 100, 40))('header');

const AppHeader = () => (
  <Header>
    <Link to="/">
      <h2 className="title">
        Textploration
        <br />
        <small>A game</small>
      </h2>
    </Link>

    <AppNav />
  </Header>
);

export default AppHeader;
