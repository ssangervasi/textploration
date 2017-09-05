// 
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Explorer from 'txpn/core/models/Explorer';
import TextInput from 'txpn/components/common/TextInput';
import { bindy } from 'txpn/utils';


export default class CreateExplorer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      done: false,
    };
    bindy(this, this.setName, this.handleSubmit);
  }

  setName(value) {
    this.setState({
      name: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let explorer = new Explorer({ name: this.state.name });
    this.props.submit(explorer)
    this.setState({
      done: true,
    });
  }

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