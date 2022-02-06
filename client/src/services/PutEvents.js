import Axios from 'axios';

export const AddCommentToExistingEvent = (eventId, data) => {
  return Axios.put(`http://localhost:4000/api/event/${eventId}`, data)
    .then((res) => console.log('datauodated', res?.data?.data))
    .catch((error) =>
      console.log('errore-get-response-id', error?.response?.data?.message)
    );
};
