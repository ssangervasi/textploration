// @flow
import React, { Component } from 'react';

import { TxpnInput } from './TxpnInput';
import { bindy } from './ComponentUtils';

import { Explorer } from 'txpn-core';

export class ExplorerDetail extends Component {
  state: Explorer;
  constructor(props: { explorer: Explorer }) {
    super(props);
    this.state = {
      name: props.explorer.name || '',
      ...props.explorer
    };
    bindy(this, this.setName);
  }

  setName(value: string): void {
    this.setState({ name: value });
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.name || 'stranger'}</p>
        <TxpnInput value={this.state.name}
                   setValue={this.setName} />
      </div>
    );
  }
}
