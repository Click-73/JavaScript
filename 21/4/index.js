export const getTitle = () => {
  const textTitle = document.querySelector(".title");
  return textTitle.textContent;
};

export const getDescription = () => {
  const textAbout = document.querySelector(".about");
  return textAbout.innerText;
};

export const getPlans = () => {
  const textPlans = document.querySelector(".plans");
  return textPlans.innerText;
};

export const getGoal = () => {
  const textGoal = document.querySelector(".goal");
  return textGoal.outerHTML;
};
