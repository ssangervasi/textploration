// @flow
import BaseModel from './BaseModel';

export default class Door extends BaseModel {
  id: string;
  originRoomId: string;
  name: string;
  number: number;
  destinationRoomId: string;
}