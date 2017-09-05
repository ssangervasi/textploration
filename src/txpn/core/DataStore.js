// 
import Subject from 'txpn/core/Subject';

export default class DataStore {

  constructor(data) {
    this.subject = new Subject();
    if (data != null) {
      this.setData(data);
    }
  }

  setData(data) {
    this.data = data;
    this.subject.publish();
  }

  getData() {
    return this.data;
  }
}