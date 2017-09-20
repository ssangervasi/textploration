/**
 * The dumbest subscriber service possible.
 */
export default class Subject {
  subscribers = [];
  publishing = false;
  last;

  subscribe(callback) {
    this.unsubscribe(callback);
    this.subscribers.push(callback);
  }

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(
      subscriber => subscriber !== callback
    );
  }

  publish(value) {
    if (this.publishing) {
      return;
    }
    this.last = value;
    this.publishing = true;
    try {
      this.subscribers.forEach(callback => {
        callback(value);
      });
    } finally {
      this.publishing = false;
    }
  }
}
