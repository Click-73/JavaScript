export const dayOfWeek = (date, days) => {
  const daysOfTheWeek = ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return daysOfTheWeek[new Date(dateInFuture).getDay()];
};

dayOfWeek(new Date(233333), 11);
