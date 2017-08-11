// @flow
import React, { Component } from 'react';

import { Explorer } from 'txpn/core/dataModel';
import TextInput from 'txpn/components/common/TextInput';
import { bindy } from 'txpn/utils';

export default class ExplorerDetail extends Component {
  state: Explorer;

  constructor(props: { explorer: Explorer }) {
    super(props);
    // $FlowFixMe
    this.state = {
      name: props.explorer.name || '',
      ...props.explorer
    };
    bindy(this, this.setName, this.handleClickExplorer);
  }

  setName(value: string): void {
    this.setState({ name: value });
  }

  handleClickExplorer() {
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="section explorer explorer-detail">
        <h2>Create your Explorer</h2>
        <div className="input-text">
          <TextInput value={this.state.name}
                     setValue={this.setName} />
          />
        </div>

        <button onClick={this.handleClickExplorer}>
          Done
        </button>
      </div>
    );
  }
}