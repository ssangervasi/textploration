import database from 'txpn/core/ORM';
import {
  Door,
  Explorer,
  Region,
  Room,
  User,
  World,
} from 'txpn/core/models';

const orm = new ORM({ database: database });

// prettier-ignore
orm.regester(
  Door,
  Explorer,
  Region,
  Room,
  User,
  World,
);

export { orm as default };
