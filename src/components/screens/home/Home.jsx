import MainCharts from './components/MainCharts/MainCharts.jsx';
import styles from './styles.module.scss';
import ErrorBoundary from '/src/utils/ErrorBoundary.jsx';
import React from 'react';

const PRODUCTS_TYPES = [
  {
    label: 'Все продукты',
    value: 'total',
  },
  {
    label: 'Продукт 1',
    value: 'product_1',
  },
  {
    label: 'Продукт 2',
    value: 'product_2',
  },
  {
    label: 'Продукт 3',
    value: 'product_3',
  },
];

const Home = () => {
  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          <span>Фильтр по типу продукции</span>
          <select>
            {PRODUCTS_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.barChart}>
          <MainCharts />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
