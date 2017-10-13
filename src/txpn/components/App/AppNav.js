import React from 'react';
import { NavLink } from 'react-router-dom';

import { unsemanticGrid } from 'txpn/utils';
import classy from 'txpn/components/HOCs/classy';

const NavList = classy('nav-list', 'grid-parent')('ul');
const NavItem = classy('nav-list__item', unsemanticGrid(20, 50, 50))('li');
const Nav = classy('app-nav', 'grid-parent', unsemanticGrid(70, 100, 60))(
  'nav'
);

const AppNav = () => (
  <Nav>
    <NavList>
      <NavItem>
        <NavLink to="/adventure">Adventure</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/create">Create</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/discover">Discover</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/account">Account</NavLink>
      </NavItem>
    </NavList>
  </Nav>
);

export default AppNav;
