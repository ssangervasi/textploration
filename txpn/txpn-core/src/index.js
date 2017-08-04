// @flow
export { Door } from './dataModel/Door';
export { Region } from './dataModel/Region';
export { Room } from './dataModel/Room';
export { World } from './dataModel/World';

export { Explorer } from './dataModel/Explorer';
export { User } from './dataModel/User';

export const butts = ['Booty', 'Ass', 'Rump'];

let tempButts;
backThatAssUp();

export function backThatAssUp() {
  tempButts = [...butts];
}

export function popThatAss() {
  return butts.pop();
}
