// @flow
import React, { Component } from 'react';

import { bindy } from './ComponentUtils';

type TxpnInputProps = {
  value: string,
  setValue: (value: string) => void,
};

export class TxpnInput extends Component {
  props: TxpnInputProps;
  
  constructor(props: TxpnInputProps) {
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