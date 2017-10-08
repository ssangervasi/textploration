import React from 'react';
import { NavLink } from 'react-router-dom';

import { unsemanticGrid } from 'txpn/utils';
import { classy } from 'txpn/components/HOCs/classy';

const NavItem = classy('nav-list__item', unsemanticGrid(20, 50, 50))('li');
const Nav = classy('app-nav', 'grid-parent', unsemanticGrid(70, 100, 60))(
  'nav'
);

const AppNav = () => (
  <Nav>
    <ul className="nav-list grid-parent">
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
        <NavLink to="/me">Profile</NavLink>
      </NavItem>
    </ul>
  </Nav>
);

export default AppNav
