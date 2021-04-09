export function getTitleElement() {
  const titleElem = document.querySelector(".title");

  return console.dir(titleElem);
}
export function getInputElement() {
  const inputElem = document
    .querySelector("input")
    .getAttribute("type", "text");

  return console.dir(inputElem);
}
