const Dshang = () => {
  /* 1、将{"a": {"n1": 1, "n2": 3 }, "b": {"n1": 2, "n2": 4}, "c": { "n1": 3,"n2": 5}}）
  转换成{"n1": {"a": 1, "b": 2, "c": 3 }, "n2": { "a": 3, "b": 4, "c": 5}}*/
  //   let obj = { a: { n1: 1, n2: 3 }, b: { n1: 2, n2: 4 }, c: { n1: 3, n2: 5 } };
  //   let r = { n1: { a: 1, b: 2, c: 3 }, n2: { a: 3, b: 4, c: 5 } };
  const obj1 = {
    a: { n1: 1, n2: 3 },
    b: { n1: 2, n2: 4 },
    c: { n1: 3, n2: 5 },
  };

  const res = {};

  for (let key in obj1) {
    for (let key2 in obj1[key]) {
      if (!res[key2]) {
        res[key2] = {};
      }
      res[key2][key] = obj1[key][key2];
    }
  }

  console.log(res);

  return <div></div>;
};

export default Dshang;
