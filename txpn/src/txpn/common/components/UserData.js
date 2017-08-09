// @flow
import React, { Component } from 'react';

import SampleData from 'txpn/core/SampleData';

// This interface is used for type-checking components
// that are composed with 
export interface UserDataProps {
  userData: SampleData;
}

// Factory for Higher-Order-Components that injects
// the `userData` prop.
class UserDataContainer {
  userData: SampleData;

  constructor(userData: SampleData) {
    this.userData = userData;
  }

  connect(WrappedComponent: ReactClass<*>) {
    const userData = this.userData;
    return class extends Component {
      render() {
        return (
          <WrappedComponent userData={userData}
                            {...this.props}
          />
        );
      }
    }
  }
}

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
            ~{this.props.userData.explorer.name}~
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

export {
  UserData as default,
  ConnectedUserDataViewer as UserDataViewer,
}