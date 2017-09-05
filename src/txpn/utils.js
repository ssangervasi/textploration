 // 
 
// Note: Possibly correct scenario for the dangerous `Function` type,
// as we really don't care what kind of function this is.

// B-I-N-D-Why? Because I gotta!
export function bindy(
  target,
  ...funcs
) {
  let toBind = {};
  funcs.forEach((func, index) => {
    toBind[func.name] = func.bind(target);
  });
  Object.assign(target, toBind);
  return toBind;
}

export function getDisplayName(
  component,
  defaultName = 'Component'
) {
  return component.displayName || component.name || defaultName;
}

export function renameWrapper(
  Wrapper,
  Wrapped
) {
  const wrapperName = getDisplayName(Wrapper, 'Wrapper');
  const wrappedName = getDisplayName(Wrapped);
  Wrapper.displayName = `${wrapperName}(${wrappedName})`;
}