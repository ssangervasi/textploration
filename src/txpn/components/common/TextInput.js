// @flow
import React, { Component } from 'react';

import { bindy } from 'txpn/utils';

export interface KeyHandler {
  key: string;
  handler: (e: SyntheticKeyboardEvent) => boolean | void;
}

export interface TextInputProps {
  value: string;
  setValue: (value: string) => void;
  keyHandlers: Array<KeyHandler>;
}

export default class TextInput extends Component {
  props: TextInputProps;
  
  constructor(props: TextInputProps) {
    super(props);
    bindy(this,
      this.handleChange,
      this.handleKey,
    );
  }

  handleChange(e: SyntheticInputEvent): void {
    const targetValue: string = e.target.value;
    this.props.setValue(targetValue);
  }

  handleKey(e: SyntheticKeyboardEvent) {
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
      <input value={value}
             onChange={this.handleChange}
             onKeyDown={this.handleKey}
             {...restProps}
      />
    );
  }
}