import Axios from 'axios';
import { filterArrayByDate, isEventPastSinceTenDays } from 'services/Date';

export const getEvents = () => {
  return Axios.get('http://localhost:4000/api/events')
    .then((res) => res?.data?.data)
    .catch((error) => console.error('error-get-response', error));
};

export const getEventById = (id) => {
  return Axios.get(`http://localhost:4000/api/event/${id}`)
    .then((res) => res?.data?.data)
    .catch((error) =>
      console.error('errore-get-response-id', error?.response?.data?.message)
    );
};

const displayListWithoutEventsPastSinceTenDays = async () => {
  let result = await getEvents();
  const listWithoutEventsPastSinceTenDays = result.filter((event) => {
    return isEventPastSinceTenDays(event.date) === false;
  });
  return listWithoutEventsPastSinceTenDays;
};

export const filterArrayByProperty = async (property, updateState, order) => {
  let list = await getEvents();

  return updateState(
    list.sort((a, b) => {
      if (order === 'asc') {
        if (a[property].toLowerCase() < b[property].toLowerCase()) {
          return -1;
        }
      }
      if (order === 'desc') {
        if (a[property].toLowerCase() > b[property].toLowerCase()) {
          return -1;
        }
      }
    })
  );
};

export const getEventsSortByDate = async (updateDate, order) => {
  const result = await displayListWithoutEventsPastSinceTenDays();
  return updateDate(filterArrayByDate(result, order));
};
