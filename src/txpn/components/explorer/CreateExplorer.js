import React from 'react';

import { dd } from 'txpn/utils';
import RegExpValidator from 'txpn/core/RegExpValidator';
import Explorer from 'txpn/core/models/Explorer';
import TextInput from 'txpn/components/common/TextInput';

export default class CreateExplorer extends React.Component {
  state = {
    name: '',
    isValid: false,
    isDone: false,
  };

  nameValidator = new RegExpValidator({
    pattern: /^(?:[^\s]|[ ]){1,40}$/,
    help: dd`
      An explorer name must be a single line of text,
      at most 40 characters long.
    `,
  });

  setName = name => {
    this.setState({
      name,
      isValid: this.nameValidator.isValid(name),
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, isValid, isDone } = this.state;
    if (isDone || !isValid) {
      return;
    }
    let explorer = new Explorer({ name });
    this.props.handleSubmit(explorer);
    this.setState({
      isDone: true,
    });
  };

  render() {
    const { name, isValid, isDone } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        id="id-create-explorer-form"
        name="createExplorerForm"
        className="form"
      >
        <h3 className="form-header grid-100">Create your Explorer</h3>
        <div className="form-field grid-100">
          <label className="form-field__label" htmlFor="id-explorer-name-input">
            Name
          </label>
          <TextInput
            value={name}
            setValue={this.setName}
            id="id-explorer-name-input"
            name="explorerName"
            className="form-field__input input"
            disabled={isDone}
            tabIndex="1"
            required
          />
          <p className={`form-field__help ${isValid ? 'help' : 'help--error'}`}>
            {this.nameValidator.help}
          </p>
        </div>
        <div className="form-buttons grid-100">
          <button
            type="submit"
            className="form-buttons__button button"
            disabled={isDone || !isValid}
            tabIndex="2"
          >
            Save
            {isDone ? ' \u2713' : ''}
          </button>
        </div>
      </form>
    );
  }
}
