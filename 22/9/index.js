const checkBoxElem = document.querySelector(".task-status");

const checkBoxLog = (e) => {
  if (e.target.checked) console.log(true);
  else console.log(false);
};

checkBoxElem.addEventListener("change", checkBoxLog);
