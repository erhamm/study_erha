// 1. 实现一个持久化 function 的自定义 Hook： useMemoizedFn，解决 Hook 中的 dep 引起的闭包问题，同时保证函数调用的准确性与实时性，使用方式如下：
// const [name, setName] = useState('a');
// const memorizedFn = useMemoizedFn(() => {
//   console.log('name', name);
// });

// memorizedFn(); // name a
import { useRef, useMemo } from "react";
export default function useMemoizedFn(cb, dep) {
  let cbRef = useRef(cb);
  let depRef = useRef(dep);

  useMemo(() => {
    cbRef.current = cb;
    depRef.current = dep;
  }, [cb, dep]);

  return useMemo(() => {
    return (...args) => cbRef.current(...args);
  }, [cbRef]);
}
