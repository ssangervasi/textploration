// @flow
import React, { Component } from 'react';

import { bindy } from 'txpn/common/utils';

type InputProps = {
  value: string,
  setValue: (value: string) => void,
};

export class Input extends Component {
  props: InputProps;
  
  constructor(props: InputProps) {
    super(props);
    bindy(this, this.handleChange);
  }

  handleChange(event: SyntheticInputEvent): void {
    const targetValue: string = event.target.value;
    this.props.setValue(targetValue);
  }

  render() {
    const value = this.props.value;
    return (
      <input value={value}
             onChange={this.handleChange}
      />
    );
  }
}