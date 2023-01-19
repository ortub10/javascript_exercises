const init = () => {
  console.log(pow(3, 4));
};

const pow = (_x, _y) => {
  let total = 1;
  for (let i = 0; i < _y; i++) {
    total *= _x;
  }

  return total;
};
init();
