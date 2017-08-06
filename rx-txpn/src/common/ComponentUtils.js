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
