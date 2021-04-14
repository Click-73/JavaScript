const eventsListElem = document.querySelector(".events-list");

const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, "div", "green");
const logGreenP = logTarget.bind(null, "p", "green");
const logGreenSpan = logTarget.bind(null, "span", "green");

const logGreyDiv = logTarget.bind(null, "div", "grey");
const logGreyP = logTarget.bind(null, "p", "grey");
const logGreySpan = logTarget.bind(null, "span", "grey");

divElem.addEventListener("click", logGreyDiv, true);
divElem.addEventListener("click", logGreenDiv);

pElem.addEventListener("click", logGreyP, true);
pElem.addEventListener("click", logGreenP);

spanElem.addEventListener("click", logGreySpan, true);
spanElem.addEventListener("click", logGreenSpan);

//                     <-- Clear -->

const buttonClearElem = document.querySelector(".clear-btn");
const buttonClear = () => {
  eventsListElem.innerHTML = "";
};

buttonClearElem.addEventListener("click", buttonClear);

//               <-- Attach handlers -->

const attachButton = document.querySelector(".attach-handlers-btn");

const attachButtonFunc = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

attachButton.addEventListener("click", attachButtonFunc);

//               <-- Remove handlers -->

const removeButton = document.querySelector(".remove-handlers-btn");

const removeButtonFunc = () => {
  divElem.removeEventListener("click", logGreyDiv, true);
  divElem.removeEventListener("click", logGreenDiv);

  pElem.removeEventListener("click", logGreyP, true);
  pElem.removeEventListener("click", logGreenP);

  spanElem.removeEventListener("click", logGreySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
};

removeButton.addEventListener("click", removeButtonFunc);
