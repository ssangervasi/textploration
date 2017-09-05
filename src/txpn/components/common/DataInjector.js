// 
import React, { Component } from 'react';

import { bindy, renameWrapper } from 'txpn/utils';
import DataStore from 'txpn/core/DataStore';

/**
 * Factory for Higher-Order-Component that injects a DataStore.
 */
export default class DataInjector {
  injectAsProp = 'data';

  constructor(dataStore, injectAsProp) {
    this.dataStore = dataStore;
    if (injectAsProp != null) {
      this.injectAsProp = injectAsProp
    }
  }

  // connect(WrappedComponent: ReactClass<*>) {
  connect(WrappedComponent) {
    const injector = this;

    class DataWrapper extends Component {
      constructor(props) {
        super(props);
        bindy(this, this.handleChange);
        this.state = {
          [injector.injectAsProp]: injector.dataStore.getData(),
        };
      }
      componentDidMount() {
        injector.dataStore.subject.subscribe(this.handleChange);
      }
      componentWillUnmount() {
        injector.dataStore.subject.unsubscribe(this.handleChange);
      }
      handleChange() {
        this.setState({
          [injector.injectAsProp]: injector.dataStore.getData(),
        });
      }
      render() {
        const injectedProps = {
          [injector.injectAsProp]: this.state[injector.injectAsProp],
          ...this.props,
        }
        return <WrappedComponent {...injectedProps} />;
      }
    }
    
    renameWrapper(DataWrapper, WrappedComponent);
    return DataWrapper;
  }
}
