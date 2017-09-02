// @flow
import Model from './Model';

export default class Room extends Model {
  id: string;
  name: string;
  description: string;
  // Relationships.
  region: string;
}
