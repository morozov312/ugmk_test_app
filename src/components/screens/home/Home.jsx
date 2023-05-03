import MainCharts from './components/MainCharts/MainCharts.jsx';
import styles from './styles.module.scss';
import ErrorBoundary from '/src/utils/ErrorBoundary.jsx';
import React, { useState } from 'react';
import { CHART_FIELDS } from '/src/utils/getChartFields.js';

const PRODUCTS_TYPES = [
  {
    label: 'Все продукты',
    value: 'total',
  },
  ...CHART_FIELDS,
];

const Home = () => {
  const [currentFilter, setCurrentFilter] = useState(PRODUCTS_TYPES[0].value);

  const onFilterChange = (e) => {
    setCurrentFilter(e.target.value);
  };

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          <span>Фильтр по типу продукции</span>
          <select onChange={onFilterChange} value={currentFilter}>
            {PRODUCTS_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.barChart}>
          <MainCharts productType={currentFilter} />
          <div className={styles.legendWrapper}>
            <span className={styles.legend}>Фабрика А</span>
            <span className={styles.legend}>Фабрика Б</span>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
