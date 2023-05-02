import React from 'react';
import { useQuery } from 'react-query';
import { getAllProducts } from '/src/api/products.js';

const Home = () => {
  const { data } = useQuery('products', getAllProducts, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  console.log(data);

  return <div>My app</div>;
};

export default Home;
