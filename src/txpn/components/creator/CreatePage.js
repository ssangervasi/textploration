import React from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';

import classy from 'txpn/components/HOCs/classy';
import { unsemanticGrid } from 'txpn/utils';
import CreateExplorer from 'txpn/components/explorer/CreateExplorer';

import Help from './Help';
import Overview from './Overview';

const Nav = classy('creator-nav', 'grid-parent', unsemanticGrid(100))('nav');
const NavHeader = classy(unsemanticGrid(100))('h3');
const NavList = classy('nav-list', unsemanticGrid(40, 100, 80))('ul');
const NavItem = classy('nav-list__item', unsemanticGrid(33))('li');

export default class CreatePage extends React.Component {
  receiveExplorer = evt => {
    console.log('CreatePage.receiveExplorer', evt);
  };

  render() {
    const path = this.props.match.path;
    return (
      <div>
        <Nav>
          <NavHeader>
            <NavLink exact to={`${path}`}>
              Adventure Creator
            </NavLink>
          </NavHeader>
          <NavList>
            <NavItem>
              <NavLink to={`${path}/`}>Overview</NavLink>
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
        <Switch>
          <Route exact path={`${path}`} component={Overview} />
          <Route path={`${path}/help`} component={Help} />
          <Route path={`${path}/world`} />
          <Route path={`${path}/region`} />
          <Route path={`${path}/room`} />
          <Route
            path={`${path}/explorer`}
            render={() => <CreateExplorer submit={this.receiveExplorer} />}
          />
          <Redirect to={`${path}/help`} />
        </Switch>
      </div>
    );
  }
}
