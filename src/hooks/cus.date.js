const mounths = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const week = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const useDate = () => {
  const date = new Date();
  const currentDay = `${week
    .filter((day, index) => index === date.getDay() - 1)
    .toString()}, the ${date.getDate()} ${mounths
    .filter((mounth, index) => index === date.getMonth())
    .toString()} ${date.getFullYear()}`;

  return currentDay;
};
