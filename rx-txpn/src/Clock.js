// @flow
import React, { Component } from 'react';

import { bindy } from './ComponentUtils';

type ClockProps = {
  locales?: string | Array<string>,
  options?: Object,
};

type ClockState = {
  date: Date,
  paused: boolean,
};

export class Clock extends Component {
  state: ClockState;
  props: ClockProps;
  timerId: number;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date(),
      paused: false,
    };
    bindy(this, this.clickPause);
  }

  // Lifecycle

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // Events

  tick() {
    this.setState(prevState =>
      ({ date: (prevState.paused ?
                  prevState.date :
                  new Date())
      })
    );
  }

  clickPause() {
    this.setState(prevState =>
      ({ paused: !prevState.paused })
    );
  }


  render() {
    return (
      <div>
        <date>{
          this.state.date.toLocaleString(
            this.props.locales,
            this.props.options)
        }</date>
        <button onClick={this.clickPause}>
          {this.state.paused ?
            'Unpause' :
            'Pause'
          }
        </button>
      </div>
    );
  }
}
