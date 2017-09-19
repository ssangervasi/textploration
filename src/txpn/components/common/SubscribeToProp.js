import React from 'react';
import Subject from 'txpn/core/Subject';

import { renameWrapper } from 'txpn/utils';

/**
 * Factory for Higher-Order-Component that allows injecting
 * subscribed data as props.
 */
function SubscripeToProp({ prop, subject }) {
  return function(WrappedComponent) {
    class SubjectWrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          [prop]: subject.last,
        };
      }

      componentDidMount() {
        subject.subscribe(this.handleChange);
      }

      componentWillUnmount() {
        subject.unsubscribe(this.handleChange);
      }

      handleChange = value => {
        this.setState({
          [prop]: value,
        });
      };

      render() {
        const wrappedProps = {
          [prop]: this.state[prop],
          ...this.props,
        };
        return <WrappedComponent {...wrappedProps} />;
      }
    }

    renameWrapper(SubjectWrapper, WrappedComponent);
    return SubjectWrapper;
  };
}

export { SubscripeToProp as default, Subject };
