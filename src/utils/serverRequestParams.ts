import md5 from 'js-md5';

export function getRequestParams(timestamp: Date) {
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
  const privateKey = process.env.MARVEL_API_PRIVATE_KEY;
  
  const ts = Number(timestamp);
  const hash = md5.create();
  hash.update(ts + privateKey + publicKey);
  
  
  return {
    ts,
    apikey: publicKey,
    hash: hash.toString().toLowerCase(),
  }
}
