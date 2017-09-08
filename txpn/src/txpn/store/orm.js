import ORM from 'txpn/core/ORM';
import {
  Door,
  Explorer,
  Region,
  Room,
  User,
  World,
} from 'txpn/core/models';

import database from './database';

const orm = new ORM({ database: database });

// prettier-ignore
orm.register(
  Door,
  Explorer,
  Region,
  Room,
  User,
  World,
);

export { orm as default };
