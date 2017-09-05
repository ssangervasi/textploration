// 
import React, { Component } from 'react';

import { bindy } from 'txpn/utils';



export default class TextInput extends Component {

  constructor(props) {
    super(props);
    bindy(this,
      this.handleChange,
      this.handleKey,
    );
  }

  handleChange(e) {
    const targetValue = e.target.value;
    this.props.setValue(targetValue);
  }

  handleKey(e) {
    if (this.props.keyHandlers == null){
      return;
    }
    let shouldPrevent = false;
    // TODO: Create a mapping ahead of time to reduce looping.
    this.props.keyHandlers.forEach(
      keyHandler => {
        if (keyHandler.key !== e.key) {
          return;
        }
        let result = keyHandler.handler(e);
        shouldPrevent = shouldPrevent || (result === true);
      }
    );
    if (shouldPrevent) {
      e.preventDefault();
    }
  }

  render() {
    const { value, setValue, keyHandlers, ...restProps} = this.props;
    return (
      <input value={value || ''}
             onChange={this.handleChange}
             onKeyDown={this.handleKey}
             {...restProps}
      />
    );
  }
}