export const upComingEvents = (data) => {
  return data?.filter((event) => new Date(event.date) - new Date() > 0);
};

export const pastEvents = (data) => {
  return data?.filter((event) => new Date(event.date) - new Date() < 0);
};

const optionsLong = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const optionsNumeric = {
  weekday: 'numeric',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};
export const convertIntoFrenchDate = (date, numeric) => {
  const options = numeric ? optionsNumeric : optionsLong;
  const days = new Date(date).toLocaleDateString('fr-FR', options);
  const time = new Date(date).toLocaleTimeString('fr-FR');
  return `${days} ${time}`;
};

export const isEventSoon = (date) => {
  const currentDate = new Date();
  const dateInTenDays = new Date();
  dateInTenDays.setDate(currentDate.getDate() + 11);

  const dateToCompare = new Date(date).getTime();
  const deadline = new Date(dateInTenDays).getTime();

  return currentDate < dateToCompare && dateToCompare < deadline;
};

export const isEventPast = (date) => {
  const currentDate = new Date();
  const dateToCompare = new Date(date).getTime();
  return currentDate > dateToCompare;
};

export const isEventPastSinceTenDays = (date) => {
  const currentDate = new Date();
  const dateTenDaysAgo = new Date();
  dateTenDaysAgo.setDate(currentDate.getDate() - 11);

  const dateToCompare = new Date(date).getTime();
  const deadline = new Date(dateTenDaysAgo).getTime();

  return dateToCompare < deadline;
};

export const filterArrayByDate = (data, order) => {
  return data.slice().sort((a, b) => {
    if (order === 'asc') {
      return new Date(b.date) - new Date(a.date);
    }
    return new Date(a.date) - new Date(b.date);
  });
};

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
