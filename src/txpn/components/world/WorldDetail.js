// @flow
import React from 'react';

import { World } from 'txpn/core/models';

const WorlDetail = ({ world }: {world: World}) => (
  <span>
    {world.name} ({world.id})  
  </span>
);
export default WorlDetail;
