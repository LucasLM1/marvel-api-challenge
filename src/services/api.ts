import axios from 'axios';
import md5 from 'md5';

const publicKey = process.env.REACT_APP_API_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

const ts = new Date().getTime();
const hash = md5(ts + "process.env.REACT_APP_MARVEL_PRIVATE_KEY" + publicKey);

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    ts,
    apikey: process.env.REACT_APP_API_KEY,
    hash
  }
})
