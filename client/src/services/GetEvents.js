import Axios from 'axios';
import { filterArrayByDate, isEventPastSinceTenDays } from 'services/Date';

export const getEvents = () => {
  return Axios.get('http://localhost:4000/api/events')
    .then((res) => res?.data?.data)
    .catch((error) => console.log('error-get-response', error));
};

export const getEventById = (id) => {
  return Axios.get(`http://localhost:4000/api/event/${id}`)
    .then((res) => res?.data?.data)
    .catch((error) =>
      console.log('errore-get-response-id', error?.response?.data?.message)
    );
};

const displayListWithoutEventsPastSinceTenDays = async (updateDate, order) => {
  let result = await getEvents();
  const listWithoutEventsPastSinceTenDays = result.filter((event) => {
    return isEventPastSinceTenDays(event.date) === false;
  });
  return listWithoutEventsPastSinceTenDays;
};

export const getEventsSortByDate = async (updateDate, order) => {
  const result = await displayListWithoutEventsPastSinceTenDays();
  return updateDate(filterArrayByDate(result, order));
};

export const filterArrayByProperty = async (property, updateState, order) => {
  let list = await getEvents();
  console.log('order', order);
  return updateState(
    list.sort((a, b) => {
      if (order === 'asc') {
        if (a[property] < b[property]) {
          return -1;
        }
      }
      if (order === 'desc') {
        if (a[property] > b[property]) {
          return -1;
        }
      }
    })
  );
};
