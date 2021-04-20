export const studentsDate = [
  {
    name: "Sam",
    birthDate: "03/15/2010",
  },
  {
    name: "Tom",
    birthDate: "01/15/2010",
  },
  {
    name: "Ben",
    birthDate: "01/17/2008",
  },
];

const studentsBirthDays = (students) => {
  const formatter = new Intl.DateTimeFormat("en", { month: "short" });

  const sortMonthOfBored = [...students]
    .sort(
      (a, b) =>
        new Date(a.birthDate).getMonth() - new Date(b.birthDate).getMonth()
    )
    .reduce((acc, item) => {
      item.birthDate = formatter.format(new Date(item.birthDate));
      // console.log(item.birthDate);  month
      // console.log(acc[item.birthDate]); names

      acc[item.birthDate] = acc[item.birthDate] || [];
      acc[item.birthDate].push(item.name);
      return acc;
    }, {});

  return sortMonthOfBored;
};

studentsBirthDays(studentsDate);
