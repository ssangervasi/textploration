import { BaseError } from 'txpn/core/errors';

export class ORMError extends BaseError {}

export class FieldError extends ORMError {}
export class InvalidFieldModelError extends FieldError {}
export class InvalidForeignKeyModelErrror extends FieldError {}

export class ModelError extends ORMError {}
export class ModelNotRegisteredError extends ModelError {}

export class DatabaseError extends ORMError {}
export class ModelNotFoundError extends DatabaseError {}
export class InstanceNotFoundError extends DatabaseError {}
export class MissingIdError extends DatabaseError {}
