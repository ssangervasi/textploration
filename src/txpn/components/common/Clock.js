import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      paused: false,
    };
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
    this.setState(prevState => ({
      date: prevState.paused ? prevState.date : new Date(),
    }));
  }

  handleClickPause = () => {
    this.setState(prevState => ({ paused: !prevState.paused }));
  };

  render() {
    return (
      <div>
        <date>
          {this.state.date.toLocaleString(
            this.props.locales,
            this.props.options
          )}
        </date>
        <button onClick={this.handleClickPause}>
          {this.state.paused ? 'Unpause' : 'Pause'}
        </button>
      </div>
    );
  }
}

export default Clock;
