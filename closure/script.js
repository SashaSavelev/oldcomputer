const foo = () => {
    let index = 0


 return () => {
    console.log(++index)
  };
};
 

foo()()