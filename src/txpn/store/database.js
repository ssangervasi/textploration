// 
import Database from 'txpn/core/Database';
import sampleData from './sampleData';

const database = new Database();
database.regions.addAll(sampleData.regions);
database.doors.addAll(sampleData.doors);
database.rooms.addAll(sampleData.rooms);
database.worlds.addAll(sampleData.worlds);

export {
  database as default
}