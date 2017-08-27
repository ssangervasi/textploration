// @flow
import React, { Component } from 'react';
import type { Node, ComponentType } from 'react/react';
import { Redirect } from 'react-router-dom';

import { bindy } from 'txpn/utils';

// Bleh hate this.
export default class RouteStep {
  next: string;
  
  constructor(next: string) {
    this.next = next;
  }

  connect(WrappedComponent: ComponentType) {
    const step = this;
    class StepWrapped extends Component {
      state: {
        done: boolean,
      };

      constructor(props: {}) {
        super(props);
        bindy(this, this.done);
        this.state = { done: false };
      }

      done() {
        this.setState({ done: true });
      }

      render() {
        if (this.state.done) {
          return <Redirect to={step.next} />
        }
        return (
          <WrappedComponent done={this.done} {...this.props} />
        );
      };
    }
  }
}
