const jfc = new Date("Aug 21 1953");
Date.parse(jfc);

const datePlusDays = (aDate, days) => {
  const milliSecsInDay = 24 * 60 * 60 * 1000;
  return new Date(Date.parse(aDate) + days * milliSecsInDay);
};
datePlusDays(jfc, 25000);
