// @flow
import Model from './Model';

export default class Door extends Model {
  id: string;
  name: string;
  number: number;
  // Relationships
  origin: string;
  destination: string;
}