const getDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const miliSecondInDay = 86400000;

  const diff = Math.abs(end - start);

  const getHours = new Date(diff).getHours();

  const getMinutes = new Date(diff).getMinutes();

  const getSeconds = new Date(diff).getSeconds();

  const days = Math.floor(diff / miliSecondInDay);

  return `${days}d ${getHours}h ${getMinutes}m ${getSeconds}s`;
};
