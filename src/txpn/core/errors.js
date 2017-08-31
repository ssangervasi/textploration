// @flow

export class BaseError {
  message: string;

  constructor(message: string = '') {
    this.message = message;
  }

  toString(): string {
    return `${this.constructor.name}(${this.message})`;
  }
}

export class NotImplementedError extends BaseError {}