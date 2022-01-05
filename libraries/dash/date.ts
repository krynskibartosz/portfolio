export const fDate = (date: Date, options: any) => {
  return new Date(date).toLocaleDateString(undefined, options);
};

export const getFirstDayOfWeek = (date: Date) => {
  const newDate = new Date(date);
  const day = date.getDay(); // Get current day number, converting Sun. to 7
  if (day !== 0)
    // Only manipulate the date if it isn't Mon.
    newDate.setHours(-24 * day);
  return newDate;
};

export const getDaysOfWeek = (date: Date) => {
  const day = getFirstDayOfWeek(date);
  const days = [new Date(day)];
  day.setDate(day.getDate() + 1);
  while (day.getDay() !== 0) {
    days.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }
  return days;
};

export const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1);
};

export const getDaysOfMonthByWeek = (year: number, month: number) => {
  const day = getFirstDayOfWeek(getFirstDayOfMonth(year, month));
  const days = [];
  while (day.getMonth() !== (month + 1) % 12) {
    days.push(getDaysOfWeek(day));
    day.setDate(day.getDate() + 7);
  }
  return days;
};

export const isGreater = (greater?: Date | null, to?: Date | null) => {
  if (!greater || !to) return false;
  return new Date(greater).getTime() > new Date(to).getTime();
};

export const datesAreOnSameDay = (first: Date, second: Date) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

export const hoursStringToMinutes = (hoursString: string) => {
  const [hour, minutes] = hoursString.split(":");
  return parseInt(hour) * 60 + parseInt(minutes);
};
export const minutesToHourString = (time: number) => {
  const hours = Math.floor(time / 60).toFixed(0);
  const minutes = `${time % 60}`;
  let formattedHours = "";
  let formattedMinutes = "";

  if (hours.length === 1) {
    formattedHours = "0" + hours;
  } else {
    formattedHours = hours;
  }
  if (minutes.length === 1) {
    formattedMinutes = "0" + minutes;
  } else {
    formattedMinutes = minutes;
  }
  return `${formattedHours}:${formattedMinutes}`;
};
