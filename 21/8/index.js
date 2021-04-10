export const createButton = (buttonText) => {
  const createItem = document.createElement("button");
  createItem.textContent = `${buttonText}`;
  const body = document.querySelector("body");
  body.append(createItem);
};

console.log(createButton("Send hi"));
