export default function useThrottle(wait, func) {
  let isRun = false;
  let timer;
  return function (...args) {
    if (!isRun) {
      clearTimeout(timer);
      isRun = true;
      timer = setTimeout(() => {
        func.apply(this, args);
        isRun = false;
      }, wait);
    }
  };
}
