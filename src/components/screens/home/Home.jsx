import { getAllProducts } from '/src/api/products.js';
import ErrorBoundary from '/src/utils/ErrorBoundary.jsx';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { data } = useQuery('products', getAllProducts, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => navigate('/404'),
  });

  console.log(data);

  return (
    <ErrorBoundary>
      <div>My app</div>
    </ErrorBoundary>
  );
};

export default Home;
