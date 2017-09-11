import React from 'react';

export default class TextInput extends React.Component {
  handleChange = evt => {
    const targetValue = evt.target.value;
    this.props.setValue(targetValue);
  };

  handleKey = evt => {
    if (this.props.keyHandlers == null) {
      return;
    }
    let shouldPrevent = false;
    // TODO: Create a mapping ahead of time to reduce looping.
    this.props.keyHandlers.forEach(keyHandler => {
      if (keyHandler.key !== evt.key) {
        return;
      }
      let result = keyHandler.handler(evt);
      shouldPrevent = shouldPrevent || result === true;
    });
    if (shouldPrevent) {
      evt.preventDefault();
    }
  };

  render() {
    const { value, setValue, keyHandlers, ...restProps } = this.props;
    return (
      <input
        value={value || ''}
        onChange={this.handleChange}
        onKeyDown={this.handleKey}
        {...restProps}
      />
    );
  }
}
