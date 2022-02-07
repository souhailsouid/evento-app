import Axios from 'axios';

const PostEvent = (data) => {
  Axios.post('http://localhost:4000/api/new-event', data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error('err_request_post_event', err, err?.response);
    });
};
export default PostEvent;
