// @flow

/**
 * The dumbest subscriber service possible.
 */
export default class Subject {
  subscribers: Array<() => void> = [];
  publishing = false;

  subscribe(callback: () => void) {
    this.subscribers.push(callback);
  }
  unsubscribe(callback: () => void) {
    this.subscribers = this.subscribers.filter(
      subscriber => subscriber !== callback
    );
  }
  publish() {
    if (this.publishing) {
      return;
    }
    this.publishing = true;
    try {
      this.subscribers.forEach(callback => {
        callback();
      });
    } finally {
      this.publishing = false;
    }
  }
}