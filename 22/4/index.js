const checkBoxElem = document.querySelector(".task-status");

const logCheckBox = () => {
  if (checkBoxElem.checked) console.log(true);
  else {
    console.log(false);
  }
};

checkBoxElem.addEventListener("change", logCheckBox);
