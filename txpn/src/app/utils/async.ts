
export  function resolveLater(value: any, seconds: number): Promise<any> {
  return new Promise(
    resolve => setTimeout(
      () => resolve(value),
      seconds * 1000)
  );
}