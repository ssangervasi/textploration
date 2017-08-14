// @flow
import BaseModel from './BaseModel';

export default class Region extends BaseModel {
  id: string;
  name: string;
  roomIds: string[];
}
