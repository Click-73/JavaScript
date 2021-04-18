const formatter = new Intl.DateTimeFormat("en", {
  timeZone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const getGreenwochTime = (date) => formatter.format(date);

console.log(getGreenwochTime(new Date()));
