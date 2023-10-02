import { useState, useEffect } from 'react';

export const useFilter = <T>(
  data: T[],
  filterValue: string,
  filterKey: keyof T,
) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filterData = () => {
      if (!filterValue) {
        setFilteredData(data);
      } else {
        const filtered = data.filter(item => item[filterKey] === filterValue);
        setFilteredData(filtered);
      }
    };

    filterData();
  }, [data, filterValue]);

  return filteredData;
};
