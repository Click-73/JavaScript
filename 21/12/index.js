export const squaredNumbers = () => {
  const atribute = document.querySelector(".number");
  [...atribute].map((item) => {
    const numberAtribute = item.dataset.number;
    const square = numberAtribute * numberAtribute;
    item.dataset.squaredNumber = square;
    return item;
  });
  return atribute;
};
