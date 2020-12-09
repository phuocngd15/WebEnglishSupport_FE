import axios from 'axios';
const token = localStorage.getItem('token')
const axiosGet = async props => {
  const { url, ...rest } = props;
  console.log(props);
  let response;
  try {
    response = await axios.get(url, {
      params: {
        ...rest
      }
    });
  } catch (error) {
    console.error(error);
  }
  return response;
};

const axiosPost = async props => {
  const { url, ...rest } = props;
  let response;
  try {
    response = await axios.post(url, rest);
  } catch (error) {
    console.error(error);
  }
  return response;
};
axios.create({
  headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${token}`
  }
})

export { axiosGet, axiosPost };
