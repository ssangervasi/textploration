import { BaseError } from 'txpn/core/errors';

export class ModelError extends BaseError {}
export class ModelNotRegisteredError extends ModelError {}

export class DatabaseError extends BaseError {}
export class ModelNotFoundError extends DatabaseError {}
export class InstanceNotFoundError extends DatabaseError {}
export class MissingIdError extends DatabaseError {}
