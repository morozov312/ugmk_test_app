import { getAllProducts } from '/src/api/products.js';
import ErrorBoundary from '/src/utils/ErrorBoundary.jsx';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './styles.module.scss';
import { CalculateProductAmount } from '../../../utils/calculateProductAmount.js';

const Home = () => {
  const navigate = useNavigate();
  const { data } = useQuery('products', getAllProducts, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => navigate('/404'),
  });

  const preparedData = useMemo(() => CalculateProductAmount(data), [data]);

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <div className={styles.barChart}>
          <ResponsiveContainer width='98%' height='98%'>
            <BarChart width={150} height={40} data={preparedData}>
              <XAxis dataKey='name' />
              <YAxis />
              <Legend />
              <Bar dataKey='product1_1' fill='#8884d8' />
              <Bar dataKey='product1_2' fill='#8884d8' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
