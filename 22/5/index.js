const buttonElem = document.querySelector(".search__btn");
const inputElem = document.querySelector(".search__input");

const logConsole = () => {
  console.log(inputElem.value);
};

buttonElem.addEventListener("click", logConsole);
