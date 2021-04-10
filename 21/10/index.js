export const finishForm = () => {
  const formPlace = document.querySelector(".login-form");
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("name", "login");
  formPlace.prepend(newInput);

  const oldInput = document.querySelector('input[name="password"]');
  oldInput.setAttribute("type", "password");
};
