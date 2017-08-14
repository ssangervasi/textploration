// @flow

/**
 * The dumbest subscriber service possible.
 */
export default class Subject {
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