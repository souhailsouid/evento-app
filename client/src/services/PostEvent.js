import Axios from 'axios';

const PostEvent = (data) => {
  Axios.post('http://localhost:4000/api/new-event', data)
    .then((res) => {
      console.log('post-res', res);
    })
    .catch((err) => {
      console.log('err_request', err, err?.response);
    });
};
export default PostEvent;
