import axios from 'axios';
import md5 from 'js-md5';

const publicKey = process.env.MARVEL_API_PUBLIC_KEY;
const privateKey = process.env.MARVEL_API_PRIVATE_KEY;

const ts = Number(new Date());
const hash = md5.create();
hash.update(ts + privateKey + publicKey);

console.log(hash);

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts,
    apikey: publicKey,
    hash: hash.toString().toLowerCase(),
  }
});