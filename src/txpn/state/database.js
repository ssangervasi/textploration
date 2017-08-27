// @flow
import Database from 'txpn/core/Database';
import sampleData from './sampleData';

const database = new Database();
database.worlds.addAll(sampleData.worlds);

export {
  database as default
}