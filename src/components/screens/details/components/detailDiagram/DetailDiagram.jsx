import styles from './styles.module.scss';
import { getAllProducts } from '/src/api/products.js';
import { ROUTES } from '/src/nav/routes.js';
import ErrorBoundary from '/src/utils/ErrorBoundary.jsx';
import { calculateDataForDiagram } from '/src/utils/calculateDataForDiagram.js';
import { CalculateProductAmount } from '/src/utils/calculateProductAmount.js';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const factoryKey = {
  1: 'А',
  2: 'Б',
};

const DetailDiagram = () => {
  const { factoryId, month } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery('products', getAllProducts, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => navigate(ROUTES.notFound),
  });

  const preparedData = useMemo(() => CalculateProductAmount(data), [data]);
  const selectedMonth = preparedData[month - 1];

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <h1>
          Статистика по продукции фабрики {factoryKey[factoryId]} за{' '}
          {selectedMonth?.name}
        </h1>
        <ResponsiveContainer width='100%' height='40%'>
          <PieChart width={400} height={400}>
            <Pie
              dataKey='value'
              isAnimationActive={false}
              data={calculateDataForDiagram(selectedMonth, factoryId)}
              cx='50%'
              cy='50%'
              outerRadius={80}
              fill='green'
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ErrorBoundary>
  );
};

export default DetailDiagram;
