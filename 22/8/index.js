// const inputElem = document.querySelector(".text-input");

// const logInput = () => {
//   console.log(inputElem.value);
// };

// inputElem.addEventListener("change", logInput);

const inputElem = document.querySelector(".text-input");

const logInput = (e) => {
  console.log(e.target.value);
};

inputElem.addEventListener("change", logInput);
