export const getSection = (num) => {
  const spanAtrNumber = document.querySelector(`span[data-number="${num}"]`);
  const perents = spanAtrNumber.closest(".box");
  return perents.dataset.section;
};
