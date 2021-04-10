export const squaredNumbers = () => {
  const atribute = document.querySelector(".number");
  [...atribute].map((item) => {
    const numberAtribute = item.dataset.number;
    item.dataset.squaredNumber = numberAtribute * numberAtribute;
  });
};
