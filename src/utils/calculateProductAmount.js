import { CHART_FIELDS } from './getChartFields.js';

const dateIsValid = (date) => {
  return date instanceof Date && !isNaN(date);
};

/**
 * calculate total products amount for each factory
 * @param {Object[]} data
 * @return {Object[]}
 */

export const CalculateProductAmount = (data) => {
  const res = [];
  if (Array.isArray(data)) {
    data.forEach((product) => {
      const dateInstance = new Date(product.date);
      if (dateIsValid(dateInstance)) {
        const monthIndex = dateInstance.getMonth();
        const currentMonth = res[monthIndex];
        if (!currentMonth) {
          const formattedMonth = dateInstance
            .toLocaleString('ru', { month: 'short' })
            .replace(/\.$/gm, '');
          res[monthIndex] = {
            name:
              formattedMonth.charAt(0).toUpperCase() +
              formattedMonth.slice(1, 3),
          };
        }
        let total = 0;
        CHART_FIELDS.forEach((field) => {
          const nProduct = Number(product[field.value]);
          res[monthIndex][`${field.value}_${product.factory_id}`] =
            (res[monthIndex][`${field.value}_${product.factory_id}`] || 0) +
            nProduct;
          total += nProduct;
        });
        res[monthIndex][`total_${product.factory_id}`] =
          (res[monthIndex][`total_${product.factory_id}`] || 0) + total;
      }
    });
  }
  return res;
};
