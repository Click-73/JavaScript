const inputElem = document.querySelector(".text-input");

const funcTextInput = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener("click", funcTextInput);
