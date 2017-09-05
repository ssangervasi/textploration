export class BaseError {
  constructor(message = '') {
    this.message = message;
  }

  toString() {
    return `${this.constructor.name}(${this.message})`;
  }
}

export class NotImplementedError extends BaseError {}
