const studentsDate = [
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
  if (!Array.isArray(students)) {
    return;
  }

  const sortMonthOfBored = [...students]
    .sort(
      (a, b) =>
        new Date(a.birthDate).getMonth() - new Date(b.birthDate).getMonth() ||
        new Date(a.birthDate).getFullYear() -
          new Date(b.birthDate).getFullYear()
    )

    .reduce((acc, elem) => {
      const months = formatter.format(new Date(elem.birthDate));
      // console.log(month); month
      // console.log(acc[elem.birthDate]); names

      acc[months] = acc[months] || [];
      acc[months].push(elem.name);
      return acc;
    }, {});

  return sortMonthOfBored;
};

studentsBirthDays(studentsDate);
