const init = () => {
  console.log(random(6));
};

const random = (_max) => {
  let rnd = Math.random() * (_max + 1);
  rnd = Math.floor(rnd);
  return rnd;
};

init();
