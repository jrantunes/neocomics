import md5 from 'js-md5';

const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
const privateKey = process.env.MARVEL_API_PRIVATE_KEY;

const ts = Number(new Date());
const hash = md5.create();
hash.update(ts + privateKey + publicKey);


export const params = {
  ts,
  apikey: publicKey,
  hash: hash.toString().toLowerCase(),
}