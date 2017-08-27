// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Explorer from 'txpn/core/models/Explorer';
import TextInput from 'txpn/components/common/TextInput';
import { bindy } from 'txpn/utils';

type CreateExplorerProps = {
  submit: (Explorer) => void,
};

export default class CreateExplorer extends Component {
  props: CreateExplorerProps;
  state: { 
    name: string,
    done: boolean,
  };

  constructor(props: CreateExplorerProps) {
    super(props);
    this.state = {
      name: '',
      done: false,
    };
    bindy(this, this.setName, this.handleSubmit);
  }

  setName(value: string): void {
    this.setState({
      name: value,
    });
  }

  handleSubmit(e: SyntheticEvent) {
    let explorer = new Explorer({ name: this.state.name });
    if (this.props.submit) {
      this.props.submit(explorer)
    };
    this.setState({
      done: true,
    });
  }

  render() {
    return (
      <form className="CreateExplorer-form"
            onSubmit={this.handleSubmit}
            action="#">
        <h2>Create your Explorer</h2>
        <div className="form-field">
          <label className="form-field__label"
                 htmlFor="id-explorer-name-input">
            Name
          </label>
          <TextInput value={this.state.name}
                     setValue={this.setName}
                     id="id-explorer-name-input"
                     className="form-field__input--submerged"
                     disabled={this.state.done}
          />
        </div>

        <button type="submit"
                className="form-control__button"
                disabled={this.state.done}>
          Save
        </button>
      </form>
    );
  }
}