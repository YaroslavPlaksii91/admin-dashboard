import { useState, useEffect } from 'react';

import { formatDate } from '@services/date/formatDate';

export const useFilter = <T>(
  data: T[],
  filterValue: string,
  filterKey: keyof T,
) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filterData = () => {
      if (!filterValue) {
        return setFilteredData(data);
      }

      if (filterKey === 'date') {
        const filtered = data.filter(item => {
          const formattedDate = formatDate(String(item[filterKey]));
          return formattedDate.date === filterValue;
        });
        return setFilteredData(filtered);
      }

      const filtered = data.filter(item => item[filterKey] === filterValue);
      setFilteredData(filtered);
    };

    filterData();
  }, [data, filterValue]);

  return filteredData;
};
