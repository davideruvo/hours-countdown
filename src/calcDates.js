const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getHolydays = (startDate) => {
  const start = startDate || new Date();
  const holidays = [
    { m: 0, d: 1 },
    { m: 0, d: 6 },
    { m: 3, d: 25 },
    { m: 4, d: 1 },
    { m: 5, d: 2 },
    { m: 7, d: 15 },
    { m: 10, d: 1 },
    { m: 11, d: 8 },
    { m: 11, d: 25 },
    { m: 11, d: 26 },
  ];
  const easterMondays = [
    new Date(2025, 3, 21),
    new Date(2026, 3, 6),
    new Date(2027, 2, 29),
    new Date(2028, 3, 17),
    new Date(2029, 3, 2),
    new Date(2030, 3, 22),
    new Date(2031, 3, 14),
    new Date(2032, 2, 29),
    new Date(2033, 3, 18),
    new Date(2033, 3, 18),
    new Date(2034, 3, 10),
    new Date(2035, 2, 26),
  ];
  const years = [start.getFullYear(), start.getFullYear() + 1];
  return [
    ...years.map((y) => holidays.map((h) => new Date(y, h.m, h.d))).flat(),
    ...easterMondays,
  ];
};
const isHoliday = (checkDate, startDate) =>
  getHolydays(startDate)
    .map((x) => x.toJSON())
    .includes(checkDate.toJSON());
const isWeekDay = (date) => !!(date.getDay() % 6);

const calcDates = (start, end) => {
  const today = new Date();
  const startDate = start
    ? new Date(start)
    : new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endDate = new Date(end);
  const m = 30;
  const h = { first: [9, 10, 11, 12], last: [14, 15, 16, 17] };
  const data = {
    d: [],
    h,
    m,
  };
  let nextDay = startDate;
  while (nextDay.getTime() <= endDate.getTime()) {
    if (isWeekDay(nextDay) && !isHoliday(nextDay, startDate)) {
      data.d.push(nextDay);
    }
    nextDay = addDays(nextDay, 1);
  }
  return data;
};

export default calcDates;
