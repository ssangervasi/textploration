import React from 'react';
import { NavLink } from 'react-router-dom';

import classy, { grid } from 'txpn/components/HOCs/classy';

const Nav = classy('app-nav', 'grid-parent')('nav');
const NavList = classy('nav-list', 'grid-parent')('ul');
const NavItem = classy('nav-list__item', grid(20, 50, 50))('li');

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
