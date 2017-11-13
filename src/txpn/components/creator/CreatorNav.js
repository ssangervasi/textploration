import React from 'react';
import { NavLink } from 'react-router-dom';

import classy, { grid } from 'txpn/components/HOCs/classy';

const Nav = classy('creator-nav', 'grid-parent', grid(100))('nav');
const NavHeader = classy(grid(100))('h3');
const NavList = classy('nav-list', grid(40, 100, 80))('ul');
const NavItem = classy('nav-list__item', grid(33))('li');

const CreatorNav = ({ path }) => (
  <Nav>
    <NavHeader>
      <NavLink exact to={`${path}`}>
        Adventure Creator
      </NavLink>
    </NavHeader>
    <NavList>
      <NavItem>
        <NavLink to={`${path}/overview`}>Overview</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`${path}/help`}>Help</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`${path}/world`}>World</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`${path}/region`}>Region</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`${path}/room`}>Room</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`${path}/explorer`}>Explorer</NavLink>
      </NavItem>
    </NavList>
  </Nav>
);

export default CreatorNav;
