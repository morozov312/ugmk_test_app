const dateIsValid = (date) => {
  return date instanceof Date && !isNaN(date);
};

/**
 * calculate total products amount for each factory
 * @param {Object[]} data
 * @return {Object[]}
 */
// const month = date.toLocaleString('ru', { month: 'short' });

export const CalculateProductAmount = (data) => {
  const res = [];
  if (Array.isArray(data)) {
    data.forEach((product) => {
      const dateInstance = new Date(product.date);
      if (dateIsValid(dateInstance)) {
        const monthIndex = dateInstance.getMonth();
        const currentMonth = res[monthIndex];
        const nProduct1 = Number(product.product1);
        const nProduct2 = Number(product.product2);
        const nProduct3 = Number(product.product3);
        const nTotal = nProduct1 + nProduct2 + nProduct3;
        if (!currentMonth) {
          res[monthIndex] = {};
        }
        res[monthIndex][`total_${product.factory_id}`] =
          (res[monthIndex]?.[`total_${product.factory_id}`] || 0) + nTotal;
        res[monthIndex][`product1_${product.factory_id}`] =
          (res[monthIndex]?.[`product1_${product.factory_id}`] || 0) +
          nProduct1;
        res[monthIndex][`product2_${product.factory_id}`] =
          (res[monthIndex]?.[`product2_${product.factory_id}`] || 0) +
          nProduct2;
        res[monthIndex][`product3_${product.factory_id}`] =
          (res[monthIndex]?.[`product3_${product.factory_id}`] || 0) +
          nProduct3;
      }
    });
  }
  return res;
};
