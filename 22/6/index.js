const buttonElem = document.querySelector(".single-use-btn");

const logButton = () => {
  console.log("clicked");
  buttonElem.removeEventListener("click", logButton);
};

buttonElem.addEventListener("click", logButton);
