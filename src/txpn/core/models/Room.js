// @flow
import BaseModel from './BaseModel';

export default class Room extends BaseModel {
  id: string;
  name: string;
  description: string;
  doorIds: string[];
}
