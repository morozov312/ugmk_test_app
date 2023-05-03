import styles from './styles.module.scss';
import { getAllProducts } from '/src/api/products.js';
import { ROUTES } from '/src/nav/routes.js';
import ErrorBoundary from '/src/utils/ErrorBoundary.jsx';
import { calculateDataForDiagram } from '/src/utils/calculateDataForDiagram.js';
import { CalculateProductAmount } from '/src/utils/calculateProductAmount.js';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const factoryKey = {
  1: 'А',
  2: 'Б',
};

const COLORS = ['green', 'orange'];

const DetailDiagram = () => {
  const { factoryId, month } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery('products', getAllProducts, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => navigate(ROUTES.notFound),
  });
  const totalData = useMemo(() => CalculateProductAmount(data), [data]);

  const preparedData = useMemo(() => {
    return calculateDataForDiagram(totalData[month - 1], factoryId);
  }, [totalData, factoryId, month]);

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <h1>
          Статистика по продукции фабрики {factoryKey[factoryId]}&nbsp;за&nbsp;
          {totalData[month - 1]?.name}
        </h1>
        <ResponsiveContainer width='100%' height='40%'>
          <PieChart width={400} height={400}>
            <Pie
              dataKey='value'
              isAnimationActive={false}
              data={preparedData}
              cx='50%'
              cy='50%'
              outerRadius={80}
              fill='green'
              label
            >
              {preparedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className={styles.legendWrapper}>
          <span className={styles.legend}>Фабрика А</span>
          <span className={styles.legend}>Фабрика Б</span>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DetailDiagram;
