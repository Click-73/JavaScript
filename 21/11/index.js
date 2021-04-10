export const manageClasses = () => {
  const oneClass = document.querySelector(".one");
  const twoClass = document.querySelector(".two");
  const threeClass = document.querySelector(".three");
  const fourClass = document.querySelector(".four");

  oneClass.classList.add("selected");
  twoClass.classList.remove("selected");
  threeClass.classList.toggle("three_done");
  if (fourClass.classList.contains("some-class")) {
    fourClass.classList.add("another-class");
  }
};
