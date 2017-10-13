import { promiseTimeout } from 'txpn/utils';
import { User } from 'txpn/core/models';

export default class FakeAuth {
  constructor({ user, defaultUser, delay = 100 }) {
    this.user = user;
    this.defaultUser = defaultUser;
    this.delay = delay;
  }

  isLoggedIn() {
    return this.user != null;
  }

  logIn() {
    return promiseTimeout(this.delay).then(() => {
      this.user = this.defaultUser;
    });
  }

  logOut() {
    this.user = null;
    return promiseTimeout(this.delay);
  }
}
