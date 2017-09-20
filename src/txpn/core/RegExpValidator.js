import { BaseError } from 'txpn/core/errors';

class RegExpValidator {
  constructor({ pattern, help }) {
    this.pattern = pattern;
    this.help = help;
  }

  isValid(value) {
    return this.pattern.test(value);
  }

  validate(value) {
    if (!this.isValid(value)) {
      throw new InvalidValueError(this.help);
    }
    return value;
  }
}

class ValidationError extends BaseError {}
class InvalidValueError extends ValidationError {}

export { RegExpValidator as default, ValidationError, InvalidValueError };
