import sampleData from './sampleData';
import FakeAuth from 'txpn/core/FakeAuth';

const shouldStartLoggedIn = true;
let user;
let defaultUser = sampleData.user;

if (shouldStartLoggedIn) {
  user = sampleData.user;
}

const auth = new FakeAuth({ user, defaultUser });

export default auth;
