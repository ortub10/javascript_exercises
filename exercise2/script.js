const init = () => {
  console.log(minusMax(10, 5));
  console.log(minusMax(10, 10));
  console.log(minusMax(5, 10));
};

const minusMax = (_x, _y) => {
  if (_x > _y) return _x - _y;
  return _y - _x;
};

init();
