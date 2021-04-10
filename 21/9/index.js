const finishList = () => {
  const newItem = document.createElement("li");
  const firstItem = document.querySelector(".list");
  const forthItem = document.querySelector(".special");

  firstItem.prepend(newItem).textContent = "1";

  firstItem.append(newItem).textContent = "8";

  newItem.before(forthItem).textContent = "4";

  newItem.after(forthItem).textContent = "6";
};
finishList();
