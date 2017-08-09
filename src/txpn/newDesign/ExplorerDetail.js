// @flow
import React, { Component } from 'react';

import { Explorer } from 'txpn/core/dataModel';

import { Input } from 'txpn/common/components/Input';
import { bindy } from 'txpn/common/utils';

export class ExplorerDetail extends Component {
  state: Explorer;
  constructor(props: { explorer: Explorer }) {
    super(props);
    // $FlowFixMe
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
      <div className="explorer-detail">
        <h2>Create your Explorer</h2>
        <div className="input-text">
          <Input value={this.state.name}
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
