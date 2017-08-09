// @flow
import React, { Component } from 'react';

import { bindy, renameWrapper } from 'txpn/common/utils';
import SampleData from 'txpn/core/SampleData';

// This interface is used for type-checking components
// that are composed with 
export interface UserDataProps {
  userData: SampleData;
}
export type UserDataState = UserDataProps;

class Subject {
  subscribers: Array<() => void> = [];
  subscribe(callback: () => void) {
    this.subscribers.push(callback);
  }
  unsubscribe(callback: () => void) {
    this.subscribers = this.subscribers.filter(
      subscriber => subscriber !== callback
    );
  }
  publish() {
    this.subscribers.forEach((callback) => {
      callback();
    });
  }
}

// Factory for Higher-Order-Component that injects
// the `userData` prop.
class UserDataContainer {
  userData: SampleData;
  subject: Subject;

  constructor(userData: SampleData) {
    this.userData = userData;
    this.subject = new Subject();
  }

  changeUserData(userData: SampleData) {
    this.userData = userData;
    this.subject.publish();
  }

  getUserData() {
    return this.userData;
  }

  connect(WrappedComponent: ReactClass<*>) {
    // const userData = this.userData;
    const container = this;
    class UserDataWrapper extends Component {
      state: UserDataState;
      constructor(props: UserDataProps) {
        super(props);
        bindy(this, this.handleChange);
        this.state = {
          userData: container.getUserData(),
        };
      }
      componentDidMount() {
        // throw 'woops';
        container.subject.subscribe(this.handleChange);
      }
      componentWillUnmount() {
        container.subject.unsubscribe(this.handleChange);
      }
      handleChange() {
        this.setState({
          userData: container.getUserData(),
        });
      }
      render() {
        return (
          <WrappedComponent userData={this.state.userData}
                            {...this.props}
          />
        );
      }
    }
    renameWrapper(UserDataWrapper, WrappedComponent);
    return UserDataWrapper;
  }
}

// A lower-order component that is compatable with being
// passed a `userData` prop.
class UserDataViewer extends Component {
  constructor(props: UserDataProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <dl>
          <dt>Name</dt>
          <dd>
            {this.props.userData.explorer.name}
          </dd>
        </dl>
      </div>
    );
  }
}

// Container instance.
const UserData = new UserDataContainer(new SampleData());
// Example of connected instance.
const ConnectedUserDataViewer: ReactClass<*> = UserData.connect(UserDataViewer);

let name = ''
setInterval(() => {
  let sd = new SampleData();
  name += ' Butts';
  sd.explorer.name = name;
  UserData.changeUserData(sd);
}, 10**3);

export {
  UserData as default,
  ConnectedUserDataViewer as UserDataViewer,
}