 // @flow
 
// Note: Correct scenario for the danger`Function` type
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
