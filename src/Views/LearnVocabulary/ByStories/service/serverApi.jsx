import axios from 'axios';

export const TestcallApiAzue = async () => {
  const res = await axios.get('https://helloazue.azurewebsites.net/');
  return res.data;
};
