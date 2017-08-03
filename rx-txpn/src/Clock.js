// @flow
import React, { Component } from 'react';

type ClockProps = {
  locales?: string | Array<string>,
  options?: Object,
};

type ClockState = {
  date: Date,
  paused: boolean,
};

function bindy(that: Object, ...funcs: Function[]): void {
  let toBind = {}
  funcs.forEach(func => {
    toBind[func.name] = func.bind(that);
  });
  Object.assign(that, toBind);
}

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
