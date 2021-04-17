const todoEl = document.querySelector(".todo-list");
const listElem = document.querySelector(".list");
const inputTextElem = document.querySelector(".task-input");
const creatButtonElem = document.querySelector(".create-task-btn");

const tasks = [
  { text: "Buy milk", done: false, id: 1 },
  { text: "Pick up Tom from airport", done: false, id: 2 },
  { text: "Visit party", done: false, id: 3 },
  { text: "Visit doctor", done: true, id: 4 },
  { text: "Buy meat", done: true, id: 5 },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  inputTextElem.value = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("data-id", id);
      checkbox.setAttribute("type", "checkbox");
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

renderTasks(tasks);

const changeClick = (item) => {
  const idNum = tasks.length;
  const newTaskText = inputTextElem.value;

  if (item.target.className === "list__item-checkbox") {
    const targetEl = tasks.find((el) => el.id === +item.target.dataset.id);
    targetEl.done = item.target.checked;
  }

  if (item.target === creatButtonElem && newTaskText !== "") {
    const newTaskObj = {
      text: newTaskText,
      done: false,
      id: idNum + 1,
    };
    tasks.push(newTaskObj);
  }

  renderTasks(tasks);
  inputTextElem.value = "";
};

todoEl.addEventListener("click", changeClick);
