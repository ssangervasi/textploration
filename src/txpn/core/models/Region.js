// @flow
import Model from './Model';

export default class Region extends Model {
  id: string;
  name: string;
  // Relationships
  world: string;
}
