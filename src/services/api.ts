import axios from 'axios';
import md5 from 'md5';

const publicKey = process.env.REACT_APP_API_KEY;
const privateKey = '41feb6f27567fdf11a2fe7dcc3a85feac5f6e09b';

const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    ts,
    apikey: process.env.REACT_APP_API_KEY,
    hash
  }
})
