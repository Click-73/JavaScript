const todoElem = document.querySelector(".todo-list");
const listElem = document.querySelector(".list");
const inputTextElem = document.querySelector(".task-input");
const creatButtonElem = document.querySelector(".btn");

const tasks = [
  { text: "Buy milk", done: false, id: 1 },
  { text: "Pick up Tom from airport", done: false, id: 2 },
  { text: "Visit party", done: false, id: 3 },
  { text: "Visit doctor", done: true, id: 4 },
  { text: "Buy meat", done: true, id: 5 },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  inputTextElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", id);
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

// <-- -->

const insideListTask = () => {
  const inputTask = inputTextElem.value;
  const idNum = tasks.length;
  if (inputTask === "") {
    return;
  }
  tasks.push({ text: inputTask, done: false, id: idNum });
  inputTextElem.value = "";
  renderTasks(tasks);
};

creatButtonElem.addEventListener("click", insideListTask);

const anotherTask = (event) => {
  const isCheckbox = event.target.classlist.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }

  const choseCheckbox = event.target.dataset.id;
  const choseTask = tasks.find((el) => el.id === choseCheckbox);
  choseTask.done = event.target.checked;

  renderTasks(tasks);
};

listElem.addEventListener("click", anotherTask);

renderTasks(tasks);
