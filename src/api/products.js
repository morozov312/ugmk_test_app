import client from './index.js';

export const getAllProducts = async () => {
  const { data } = await client.get('/products');
  return data;
};
