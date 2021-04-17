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

// // <-- -->
const onClickHandler = (item) => {
  const idNum = tasks.length; // величина айди (для новых записей)
  const inputTask = inputTextElem.value; // введенный текст листа

  if (item.target.className === "list__item-checkbox") {
    // проверяет был ли клик на чекбоксе

    const targetEl = tasks.find((el) => el.id === +item.target.dataset.id); // ищет 1й єлемент в масиве который с таким же айди КАК и элемент на который кликнули( унарный плюс для приведения с НАМБЕР)
    targetEl.done = item.target.checked; // присваевание в ДОН тру или фолс в соответсвии с флажком
  }

  if (item.target === creatButtonElem && inputTask !== "") {
    // При нажатии на кнопку и не пустое значение добавит элемент
    const newTaskObj = {
      text: inputTask,
      done: false,
      id: idNum + 1,
    };
    tasks.push(newTaskObj);
  }

  renderTasks(tasks);
};

todoElem.addEventListener("click", onClickHandler);

// <-- -->
// const insideListTask = () => {
//   const inputTask = inputTextElem.value;
//   const idNum = tasks.length;
//   if (inputTask === "") {
//     return;
//   }
//   tasks.push({ text: inputTask,
//          done: false,
//          id: idNum });
//   inputTextElem.value = "";
//   renderTasks(tasks);
// };

// creatButtonElem.addEventListener("click", insideListTask);

// const anotherTask = (event) => {
//   const isCheckbox = event.target.classlist.contains("list__item-checkbox");

//   if (!isCheckbox) {
//     return;
//   }

//   const choseCheckbox = event.target.dataset.id;
//   const choseTask = tasks.find((el) => el.id === choseCheckbox);
//   choseTask.done = event.target.checked;

//   renderTasks(tasks);
// };

// listElem.addEventListener("click", anotherTask);

// renderTasks(tasks);
