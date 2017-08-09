 // @flow
 
// Note: Possibly correct scenario for the dangerous `Function` type,
// as we really don't care what kind of function this is.
type MapNameToFunction = { [string]: Function };

export function bindy(
    target: Object,
    ...funcs: Array<Function>
    ): MapNameToFunction {
  let toBind: MapNameToFunction = {};
  funcs.forEach((func, index) => {
    toBind[func.name] = func.bind(target);
  });
  Object.assign(target, toBind);
  return toBind;
}

export function getDisplayName(
    component: ReactClass<*>,
    defaultName: string = 'Component'
    ): string {
  return component.displayName || component.name || defaultName;
}

export function renameWrapper(
    Wrapper: ReactClass<*>,
    Wrapped: ReactClass<*>) {
  const wrapperName = getDisplayName(Wrapper, 'Wrapper');
  const wrappedName = getDisplayName(Wrapped);
  Wrapper.displayName = `${wrapperName}(${wrappedName})`;
}