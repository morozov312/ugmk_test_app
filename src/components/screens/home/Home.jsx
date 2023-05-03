import MainCharts from './components/MainCharts/MainCharts.jsx';
import styles from './styles.module.scss';
import ErrorBoundary from '/src/utils/ErrorBoundary.jsx';
import { CHART_FIELDS } from '/src/utils/getChartFields.js';
import React, { useState } from 'react';

const PRODUCTS_TYPES = [
  {
    label: 'Все продукты',
    value: 'total',
  },
  ...CHART_FIELDS,
];

const SAVED_KEY = 'saved_item';

const Home = () => {
  const [currentFilter, setCurrentFilter] = useState(
    localStorage.getItem(SAVED_KEY) || PRODUCTS_TYPES[0].value,
  );

  const onFilterChange = (e) => {
    setCurrentFilter(e.target.value);
    localStorage.setItem(SAVED_KEY, e.target.value);
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
