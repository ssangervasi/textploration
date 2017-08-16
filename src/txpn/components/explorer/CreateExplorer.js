// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import UserData from 'txpn/components/common/UserData';
import Explorer from 'txpn/core/dataModel/Explorer';
import TextInput from 'txpn/components/common/TextInput';
import { bindy } from 'txpn/utils';

interface CreateExplorerProps {}
interface CreateExplorerState {
  redirectToContinue: boolean,
  name: string,
}

export default class CreateExplorer extends Component {
  props: CreateExplorerProps;
  state: CreateExplorerState;

  constructor(props: CreateExplorerProps) {
    super(props);
    this.state = {
      redirectToContinue: false,
      name: '',
    };
    bindy(this, this.setName, this.handleSubmitExplorer);
  }

  setName(value: string): void {
    this.setState({
      name: value,
    });
  }

  handleSubmitExplorer() {
    let explorer = new Explorer({ name: this.state.name });
    console.log(explorer);
    UserData.changeExplorer(explorer);
    this.setState({
      redirectToContinue: true,
    });
  }

  render() {
    if (this.state.redirectToContinue) {
      return <Redirect to="/discover" />
    }
    return (
      <div className="section explorer explorer-detail">
        <h2>Create your Explorer</h2>
        <div className="form-field">
          <label className="form-field__label"
                 htmlFor="idExplorerNameInput">
            Name
          </label>
          <TextInput value={this.state.name}
                     setValue={this.setName}
                     id="idExplorerNameInput"
                     className="form-field__input--submerged"
          />
        </div>

        <button onClick={this.handleSubmitExplorer}
                className="form-control__button">
          Save
        </button>
      </div>
    );
  }
}