const daysOfTheWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return daysOfTheWeek[new Date(dateInFuture).getDay()];
};

dayOfWeek(new Date(2019, 1, 1), 11);
