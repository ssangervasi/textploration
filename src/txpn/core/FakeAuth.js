import { promiseTimeout } from 'txpn/utils';
import { User } from 'txpn/core/models';

export default class FakeAuth {
  constructor({ user, defaultUser, delay = 100 }) {
    this.user = user;
    this.defaultUser = defaultUser;
    this.delay = delay;
  }

  get isAuthenticated() {
    return this.user != null;
  }

  authenticate() {
    return promiseTimeout(this.delay).then(() => {
      this.user = this.defaultUser;
    });
  }

  deauthenticate() {
    this.user = null;
    return promiseTimeout(this.delay);
  }
}
