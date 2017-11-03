import ORM from 'txpn/core/ORM';
import {
  Door,
  Explorer,
  Region,
  Room,
  User,
  World,
  AdventureState,
  AdventureStartState,
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
  AdventureState,
  AdventureStartState,
);

export { orm as default };
