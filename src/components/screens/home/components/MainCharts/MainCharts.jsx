import { getAllProducts } from '/src/api/products.js';
import { CalculateProductAmount } from '/src/utils/calculateProductAmount.js';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const MainCharts = ({ productType }) => {
  const navigate = useNavigate();
  const { data } = useQuery('products', getAllProducts, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => navigate('/404'),
  });

  const preparedData = useMemo(() => CalculateProductAmount(data), [data]);

  return (
    <ResponsiveContainer width='98%' height='98%'>
      <BarChart width={150} height={40} data={preparedData}>
        <XAxis dataKey='name' />
        <YAxis />
        <Bar dataKey={`${productType}_1`} fill='red' />
        <Bar dataKey={`${productType}_2`} fill='blue' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MainCharts;
