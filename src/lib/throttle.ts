export const throttle = (func: any, interval: number) => {
  let shouldFire = true;
  return (...args: any[]) => {
    if (shouldFire) {
      func(...args);
      shouldFire = false;
      setTimeout(() => {
        shouldFire = true;
      }, interval);
    }
  };
};