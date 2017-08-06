// @flow
import React from 'react';

// $FlowFix:Destructuring
const WorlDetail = ({ world }) => (
  <div>
    { world &&
  	  <span>
        { world.name } ({ world.id })  
      </span>
    }
  </div>
);

export default WorlDetail;