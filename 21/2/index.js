
// export const getTitleElement = () => {
//   const titleElem = document.querySelector(".title");
//   console.dir(titleElem);
//   return titleElem;
// }

// export const getInputElement = () => {
//   const inputElem = document
//     .querySelector("input")
//     .getAttribute("type", "text");
//   console.dir(inputElem);
//   return inputElem;
// }

export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
}

export const getInputElement = () => {
  const inputElem = document.querySelector('input[type="text"]');
  console.dir(inputElem);
  return inputElem;
}
