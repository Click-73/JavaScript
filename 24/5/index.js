const tasks = [
  { text: "Buy milk", done: false, id: 1 },
  { text: "Pick up Tom from airport", done: false, id: 2 },
  { text: "Visit party", done: false, id: 3 },
  { text: "Visit doctor", done: true, id: 4 },
  { text: "Buy meat", done: true, id: 5 },
];

const listElem = document.querySelector(".list");

const renderListItems = (listItems) => {
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      const checkboxElem = document.createElement("input");
      checkboxElem.setAttribute("type", "checkbox");
      checkboxElem.dataset.id = id;
      checkboxElem.checked = done;
      checkboxElem.classList.add("list__item-checkbox");
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.innerHTML = "";
  listElem.append(...listItemsElems);
};

// <<-------------------->>
const additionListTasks = () => {
  const inputTaskElem = document.querySelector(".task-input");
  const inputTask = inputTaskElem.value;
  const idNum = tasks.length;
  if (inputTask === "") {
    return;
  }

  tasks.unshift({ text: inputTask, done: false, id: idNum + 1 });
  inputTaskElem.value = "";
  renderListItems(tasks);
};

const buttonElem = document.querySelector(".btn");
buttonElem.addEventListener("click", additionListTasks);

const changeCompletedTask = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox"); // true or false есть ли этот клас

  if (!isCheckbox) {
    return; // если нету такого класа выходим с функции
  }

  const chosenCheckbox = event.target.dataset.id; // в переменную закидываем АЙДИ чеккбокса на который кликнули
  const chosenTask = tasks.find((el) => el.id == chosenCheckbox); // перебираем масив и если находим элемент с таким же АЙДИ  записываем в переменную
  chosenTask.done = event.target.checked; // в этом элементе меняем done на булевое checked
  renderListItems(tasks);
};

listElem.addEventListener("click", changeCompletedTask);

renderListItems(tasks);
