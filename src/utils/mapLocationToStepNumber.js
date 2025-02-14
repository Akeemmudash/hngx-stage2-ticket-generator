export const mapLocationtoStepNumber = (currentLocation, linksObject) => {
  const stepNumber = Object.values(linksObject).findIndex(
    (location) => location === currentLocation,
  );
  if (stepNumber === -1) return 1;
  return stepNumber + 1;
};
