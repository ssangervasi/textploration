// @flow
import BaseModel from './BaseModel';

export default class World extends BaseModel {
  id: string;
  name: string;
  regionIds: string[];
}