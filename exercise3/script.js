const init = () => {
  console.log(reverse(2514));
  console.log(reverse("apple"));
  console.log(reverse([1, 2]));
};

const reverse = (_x) => {
  if (typeof _x == "number") {
    let reverseNum = 0;
    while (_x !== 0) {
      reverseNum = reverseNum * 10 + (_x % 10);
      _x = Math.floor(_x / 10);
    }
    return reverseNum;
  } else if (typeof _x == "string") {
    let reverseStr = "";
    for (let i = _x.length - 1; i >= 0; i--) {
      reverseStr += _x[i];
    }
    return reverseStr;
  } else {
    return "Wrong input";
  }
};

init();
