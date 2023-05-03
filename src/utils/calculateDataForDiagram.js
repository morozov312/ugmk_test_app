import { CHART_FIELDS } from './getChartFields.js';

/**
 * @param {Object|undefined} record
 * @param {string} companyId
 * @return {{name: *, value: *}[]|*[]}
 */
export const calculateDataForDiagram = (record, companyId) => {
  if (!record) return [];
  return CHART_FIELDS.map((fieldName) => ({
    name: fieldName.value,
    value: record[`${fieldName.value}_${companyId}`],
  }));
};
