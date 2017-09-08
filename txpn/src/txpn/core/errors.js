export class BaseError {
  constructor(message = '') {
    this.message = message;
    this.stack = (new Error()).stack;
  }

  toString() {
    return `${this.constructor.name}(${this.message})`;
  }
}

export class NotImplementedError extends BaseError {}
