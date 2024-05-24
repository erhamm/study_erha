function useDebounce(wait, func) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
  //   return {};
}

export default useDebounce;
