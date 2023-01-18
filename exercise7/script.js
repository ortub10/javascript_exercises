const init = () => {
  console.log(fromFtoC(40));
};

const fromFtoC = (_deg) => {
  let c = (_deg - 32) * (5 / 9);
  return c;
};

init();
