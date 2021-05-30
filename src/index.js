import { parseJwk } from "jose/jwk/parse"
export const run = async () => {
  console.log('Hello world!');
  const keyData = '{"alg":"A256GCM","k":"LNCTMop2kFTa1aQ6uflbFeWY_m_UvSY21Cq5bj7lW1Q","key_ops":["encrypt","decrypt"],"kty":"oct"}'
  const result = await parseJwk(JSON.parse(keyData))
  console.log('result', result);
};
