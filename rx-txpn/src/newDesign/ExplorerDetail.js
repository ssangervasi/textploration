// @flow
import React, { Component } from 'react';

import { TxpnInput } from 'common/TxpnInput';
import { bindy } from 'src/common/ComponentUtils';
import Butts from 'Butts';

console.log(butts);

import { Explorer } from 'txpn-core';

export class ExplorerDetail extends Component {
  state: Explorer;
  constructor(props: { explorer: Explorer }) {
    super(props);
    this.state = {
      name: props.explorer.name || '',
      ...props.explorer
    };
    bindy(this, this.setName, this.onClickExplorer);
  }

  setName(value: string): void {
    this.setState({ name: value });
  }

  onClickExplorer() {

  }

  render() {
    return (
      <div class="explorer-detail">
        <h2>Create your Explorer</h2>
        <div class="input-text">
          <TxpnInput value={this.state.name}
                     setValue={this.setName} />
          />
        </div>

        <button onClick={this.onClickExplorer}>
          Done
        </button>
      </div>
    );
  }
}
