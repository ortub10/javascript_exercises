const init = () => {
  console.log(random(3, 6));
};

const random = (_min, _max) => {
  let rnd = Math.random() * (_max + 1 - _min);
  rnd = Math.floor(rnd) + _min;
  return rnd;
};

init();
