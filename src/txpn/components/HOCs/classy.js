import React from 'react';

import { renameWrapper, unsemanticGrid } from 'txpn/utils';

function classy(...classNames) {
  const wrapperClassName = flattenClassNames(classNames);
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

function flattenClassNames(classNames) {
  return classNames
    .map(className => (className ? className.split(/\s+/) : []))
    .reduce((all, some) => all.concat(some), [])
    .join(' ');
}

// prettier-ignore
export {
  classy as default,
  unsemanticGrid as grid,
}
