import React from 'react';
import { Redirect } from 'react-router-dom';

import Explorer from 'txpn/core/models/Explorer';
import TextInput from 'txpn/components/common/TextInput';

export default class CreateExplorer extends React.Component {
  state = {
    name: '',
    done: false,
  };

  setName = value => {
    this.setState({
      name: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    let explorer = new Explorer({ name: this.state.name });
    this.props.handleSubmit(explorer);
    this.setState({
      done: true,
    });
  };

  render() {
    return (
      <form className="form grid-container" onSubmit={this.handleSubmit}>
        <h3 className="form-header grid-100">Create your Explorer</h3>

        <div className="form-field grid-100">
          <label className="form-field__label" htmlFor="id-explorer-name-input">
            Name
          </label>
          <TextInput
            value={this.state.name}
            setValue={this.setName}
            id="id-explorer-name-input"
            className="form-field__input input"
            disabled={this.state.done}
          />
        </div>

        <div className="form-buttons grid-100">
          <button
            type="submit"
            className="form-buttons__button button"
            disabled={this.state.done}
          >
            Save
            {this.state.done ? ' \u2713' : ''}
          </button>
        </div>
      </form>
    );
  }
}
