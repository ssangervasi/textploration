import React from 'react';

import classy, { grid } from 'txpn/components/HOCs/classy';
import Badge from './Badge';
import Nav from './Nav';

const Screen = classy('app screen', 'grid-container')('div');
const Header = classy('app-header', 'grid-parent', grid(100))('header');
const BadgeWrapper = classy(grid(30, 100, 40))('div');
const NavWrapper = classy(grid(70, 100, 60))('div');
const Page = classy('app-page', grid(100))('main');

const Layout = ({ children }) => (
  <Screen>
    <Header>
      <BadgeWrapper><Badge /></BadgeWrapper>
      <NavWrapper><Nav /></NavWrapper>
    </Header>
    <Page>{children}</Page>
  </Screen>
);

export default Layout;
