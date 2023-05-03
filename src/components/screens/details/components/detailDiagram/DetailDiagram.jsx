import React, { useMemo } from 'react';
import ErrorBoundary from '/src/utils/ErrorBoundary.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getAllProducts } from '/src/api/products.js';
import { ROUTES } from '/src/nav/routes.js';
import { CalculateProductAmount } from '/src/utils/calculateProductAmount.js';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import styles from './styles.module.scss';
import { calculateDataForDiagram } from '/src/utils/calculateDataForDiagram.js';

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

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <h1>Статистика по продукции фабрики</h1>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart width={400} height={400}>
            <Pie
              dataKey='value'
              isAnimationActive={false}
              data={calculateDataForDiagram(preparedData[month - 1], factoryId)}
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
