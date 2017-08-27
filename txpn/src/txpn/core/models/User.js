// @flow
import BaseModel from './BaseModel';

type UserValues = {|
  id?: string,
  username?: string,
|};

export default class User extends BaseModel {
  id: string;
  username: string;
  constructor: (values?: UserValues) => void;
  update: (values?: UserValues) => User;
}
