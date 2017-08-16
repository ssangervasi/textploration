// @flow
import Subject from 'txpn/core/Subject';

export default class DataStore<T> {
  subject: Subject;
  data: T;

  constructor(data?: T) {
    this.subject = new Subject();
    if (data != null) {
      this.setData(data);
    }
  }

  setData(data: T): void {
    this.data = data;
    this.subject.publish();
  }

  getData(): T {
    return this.data;
  }
}