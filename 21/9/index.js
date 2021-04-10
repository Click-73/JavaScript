export const finishList = () => {
  const ulElem = document.querySelector(".list");
  const ulLiElem = document.querySelector(".special");

  const newItemOne = document.createElement("li");
  newItemOne.textContent = "1";
  ulElem.prepend(newItemOne);

  const newItemEight = document.createElement("li");
  newItemEight.textContent = "8";
  ulElem.append(newItemEight);

  const newItemThree = document.createElement("li");
  newItemThree.textContent = "4";
  ulLiElem.before(newItemThree);

  const newItemSix = document.createElement("li");
  newItemSix.textContent = "6";
  ulLiElem.after(newItemSix);
};
finishList();
