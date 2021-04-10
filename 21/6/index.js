export const setButton = (buttonText) => {
  const bodyItem = document.querySelector("body");
  bodyItem.innerHTML = `<button>${buttonText}</button>`;
};
