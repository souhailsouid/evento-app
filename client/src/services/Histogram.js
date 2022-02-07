const getDatesBetweenDates = (startDate, endDate) => {
  let dates = [];
  const theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  return dates;
};

export const labelsDiagram = () => {
  const today = new Date();
  const tendaysFromNow = new Date(today);
  tendaysFromNow.setDate(tendaysFromNow.getDate() + 11);
  const tendaysAgoFromNow = new Date(today);
  tendaysAgoFromNow.setDate(tendaysAgoFromNow.getDate() - 11);

  return getDatesBetweenDates(tendaysAgoFromNow, tendaysFromNow);
};

export const numberOfEventsPerDays = (data) => {
  return data.reduce((previous, current) => {
    previous[current] = (previous[current] || 0) + 1;

    return previous;
  }, {});
};

export const initNumberOfEventsPerDays = (data) => {
  let result = [];
  return data.reduce((previous, current, index) => {
    const label = data[index];
    previous[current] = 0;
    const a = [{ label: label, value: previous[current] }];
    result = [...result, ...a];
    return result;
  }, []);
};

const getDatesBetween = (startDate, endDate) => {
  let dates = [];

  const theDate = new Date(startDate);
  while (theDate < endDate) {
    dates.push({
      label: new Date(theDate).toLocaleDateString('fr-FR'),
      value: 0,
    });
    theDate.setDate(theDate.getDate() + 1);
  }
  return dates;
};

export const valuesDiagram = () => {
  const today = new Date();
  const tendaysFromNow = new Date(today);
  tendaysFromNow.setDate(tendaysFromNow.getDate() + 10);
  const tendaysAgoFromNow = new Date(today);
  tendaysAgoFromNow.setDate(tendaysAgoFromNow.getDate() - 10);

  return getDatesBetween(tendaysAgoFromNow, tendaysFromNow);
};
