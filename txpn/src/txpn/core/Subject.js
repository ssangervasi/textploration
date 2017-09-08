/**
 * The dumbest subscriber service possible.
 */
export default class Subject {
  subscribers = [];
  publishing = false;

  subscribe(callback) {
    this.subscribers.push(callback);
  }
  unsubscribe(callback) {
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
