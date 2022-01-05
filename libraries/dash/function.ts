export const isEmpty = (obj: any) =>
  obj === undefined || obj === null ? true : Object?.keys(obj).length === 0;

export const handleKeyDown = (event: any, keyDownAction: any) => {
  if (event.key === "Enter") {
    keyDownAction();
  }
};

export const transformDateStringToDateObject = (string: any) => {
  if (!string) return;
  const pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  const arrayDate = string.match(pattern);
  const YEARS = +arrayDate?.[3] || 0;
  const MONTH = +arrayDate?.[2] - 1 || 0;
  const DAY = +arrayDate?.[1] | 0;
  const date = new Date(YEARS, MONTH, DAY);
  return date;
};

export const transformDateObjectToDateString = (
  date: Date | string | undefined
) => {
  if (!date) return;
  const d = new Date(date);
  if (d.getTime() < 0) return;
  return d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
};
