const checkBoxElem = document.querySelector(".task-status");

const logCheckBox = () => {
  if (checkBoxElem.checked) return console.log("true");
  return console.log("false");
};

checkBoxElem.addEventListener("change", logCheckBox);
