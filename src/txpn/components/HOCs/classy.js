import React from 'react';

import { renameWrapper } from 'txpn/utils';

// export default function classy(wrapperClassName, ...wrapperClassNames) {
export default function classy(...classNames) {
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
