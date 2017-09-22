import React from 'react';

import { renameWrapper } from 'txpn/utils';

export default function classy(wrapperClassName) {
  return WrappedComponent => {
    function ClassNameWrapper({ className = '', ...wrappedProps }) {
      const wrappedClassName = `${wrapperClassName} ${className}`.trim();
      return (
        <WrappedComponent className={wrappedClassName} {...wrappedProps} />
      );
    }

    renameWrapper(ClassNameWrapper, WrappedComponent);
    return ClassNameWrapper;
  };
}
