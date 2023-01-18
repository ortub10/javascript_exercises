const init = () => {
  console.log(fromCtoF(3));
};

const fromCtoF = (_deg) => {
  let f = _deg * (9 / 5) + 32;
  return f;
};

init();
