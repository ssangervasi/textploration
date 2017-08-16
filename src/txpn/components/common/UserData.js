// @flow
import React, { Component } from 'react';

import { bindy, renameWrapper } from 'txpn/utils';
import Subject from 'txpn/core/Subject';
import SampleData from 'txpn/core/SampleData';
import DataStore from 'txpn/core/DataStore';
import { User } from 'txpn/core/dataModel';

import DataStoreInjector from './DataStoreInjector'

// const UserDataStore: DataStore<User> = new DataStore();
const UserDataStore: DataStore<User> = new DataStore(new SampleData().user);
const UserDataInjector: DataStoreInjector<User> = (
  new DataStoreInjector(UserDataStore, 'userData'));

// A lower-order component that is compatable with being
// passed a `userData` prop.
class UserDataViewer extends Component {
  render() {
    return (
      <dl>
        <dt>Name</dt>
        <dd>
          {this.props.userData.username}
        </dd>
      </dl>
    );
  }
}

const ConnectedUserDataViewer: ReactClass<*> = UserDataInjector.connect(UserDataViewer);
// // Container instance.
// const UserData = new UserDataContainer(new SampleData());
// // Example of connected instance.
// const ConnectedUserDataViewer: ReactClass<*> = UserData.connect(UserDataViewer);

export {
  // UserData as default,
  UserDataInjector as default,
  ConnectedUserDataViewer as UserDataViewer,
}
