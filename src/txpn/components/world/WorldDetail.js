import React from 'react';

import { World } from 'txpn/core/models';

const WorlDetail = ({ world }) => (
  <span>
    {world.name} ({world.id})
  </span>
);
export default WorlDetail;
