import sampleData from './sampleData';
import FakeAuth from 'txpn/core/FakeAuth';

let user;
let defaultUser = sampleData.user;

if (process.env.NODE_ENV !== 'production') {
  user = defaultUser;
}

const auth = new FakeAuth({ user, defaultUser });

export default auth;
