export const squaredNumbers = () => {
  const atribute = document.querySelector(".number");
  const newAtribute = [...atribute].map((item) => {
    const numberAtribute = item.dataset.number;
    const itemNew = item;
    itemNew.dataset.squaredNumber = numberAtribute * numberAtribute;
    return itemNew;
  });
  return newAtribute;
};
