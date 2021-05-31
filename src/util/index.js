export const getDatasetOfWinnersOrLosers = (key, hamsters) => {
  let newHamsters = [...hamsters];
  const result = newHamsters
    .sort((a, b) => Number(b[key]) - Number(a[key]))
    .slice(0, 5);
  return result;
};
