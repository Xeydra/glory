
export function randomizePlacement(parent, img) {
  let newTop = getRandomValueWithin(parent.clientHeight, img.clientHeight);
  let newLeft = getRandomValueWithin(parent.clientWidth, img.clientWidth);

  img.style.top = newTop + "px";
  img.style.left = newLeft + "px";
};

function getRandomValueWithin(parentValue, imgValue) {
  let newValue;
  let count = 10;
  do {
    newValue = Math.random() * (parentValue - imgValue);
    count--;
  } while ((newValue + imgValue) > parentValue && count > 0);

  return newValue;
}
